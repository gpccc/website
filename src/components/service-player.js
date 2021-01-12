import React from 'react';
import PropTypes from 'prop-types';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { useTranslation } from 'react-i18next';

import ServiceVideoShape from '../constants/service-video-shape';

import YouTubePlayer from './youtube-player';

import ServiceDateDisplay from './service-date-display';

import SeekToMenu from './seek-to-menu';
import RecentServicesMenu from './recent-services-menu';

import DateTimeUtils from '../modules/datetime-utils';
import ServiceVideoUtils from '../modules/service-videos-utils';

import { SERVICE_CARD_MAX_WIDTH, SERVICE_VIDEO_WIDTH, SERVICE_VIDEO_HEIGHT } from '../constants/service-constants';
import PreferredServiceEnum from '../constants/preferred-service-enum';

const calcYouTubePlayerHeight = (playerWidth) => (
    playerWidth * SERVICE_VIDEO_HEIGHT / SERVICE_VIDEO_WIDTH
);

export default function ServicePlayer({playerID, services, isServiceCombinedWithMandarin, showSnackbar, youTubeIframeAPIReady, onPlayPause, cardWidth}) {
    if (!youTubeIframeAPIReady) {
        return (
            <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress />
            </Box>
        );
    }

    const { t } = useTranslation();

    let defaultServiceToShowIndex = 0;
    const isDefaultServiceJointService = ServiceVideoUtils.isRepeatService(defaultServiceToShowIndex, services);
    if (isDefaultServiceJointService) {
        defaultServiceToShowIndex = 1;
        const defaultServiceStartDateTimeStr = services[defaultServiceToShowIndex].date;
        if (ServiceVideoUtils.liveOver(defaultServiceStartDateTimeStr)) {
            defaultServiceToShowIndex = 0;
        }
    }

    const [serviceToShow, setServiceToShow] = React.useState(services[defaultServiceToShowIndex]);
    const [youTubePlayerReady, setYouTubePlayerReady] = React.useState(false);

    const serviceToShowIndex = services.findIndex(s => s === serviceToShow);
    const isRepeatService = serviceToShowIndex >= 0 && ServiceVideoUtils.isRepeatService(serviceToShowIndex, services);

    const youTubePlayerRef = React.useRef(null);

    const youtubeVideoID = serviceToShow.youtubeVideoID;
    const message = serviceToShow.message;
    const pastor = serviceToShow.pastor === "" ? "" : t(serviceToShow.pastor);
    const date = serviceToShow.date;
    const seekPoints = serviceToShow.seekPoints;

    const isCantoneseService = (playerID === PreferredServiceEnum.CANTONESE);
    const isEnglishService = (playerID === PreferredServiceEnum.ENGLISH);
    const isCombinedService = isServiceCombinedWithMandarin(youtubeVideoID);
    const showCombinedServiceTooltip = (isCombinedService && (isCantoneseService || isEnglishService));

    React.useEffect(
        () => {
            const width = cardWidth || SERVICE_CARD_MAX_WIDTH;
            const height = calcYouTubePlayerHeight(width);

            if (!youTubePlayerRef.current) {
                const youtubePlayer = new window.YT.Player(playerID, {
                    width,
                    height,
                    videoId: youtubeVideoID,
                    playerVars: { origin: window.location.origin },
                    events: {
                        'onStateChange': onPlayerStateChange,
                        'onReady': onPlayerReady,
                    },
                });
                youTubePlayerRef.current = youtubePlayer;
            } else {
                youTubePlayerRef.current.setSize(width, height);
            }
        }, [youTubePlayerRef, cardWidth]
    );

    const onPlayerStateChange = event => {
        const playing = event.data === window.YT.PlayerState.PLAYING;
        onPlayPause(playerID, playing);
    };

    const onPlayerReady = () => {
        setYouTubePlayerReady(true);
    };

    const onSeekTo = (seekPoint) => {
        const time = DateTimeUtils.parse(seekPoint.time);
        if (time.valid && youTubePlayerRef.current) {
            const playerState = youTubePlayerRef.current.getPlayerState();

            const seconds = ((60 * time.hour) + time.minute) * 60 + time.second;
            youTubePlayerRef.current.seekTo(seconds, true /* allowSeekAhead */);

            // If a video is cued, then the first seekTo call starts the video
            // playing from the beginning. Wait one second and call seekTo again
            // to go to the time point.
            if (playerState === window.YT.PlayerState.CUED) {
                const timer = setTimeout(() => {
                    window.clearTimeout(timer);
                    youTubePlayerRef.current.seekTo(seconds, true);
                }, 1000);
            }
        } else {
            showSnackbar(t('Unable to seek to') + ' ' + t(seekPoint.label));
        }
    };

    const onServiceSelect = (service) => {
        if (youTubePlayerRef.current) {
            setServiceToShow(service);
            youTubePlayerRef.current.cueVideoById(service.youtubeVideoID);
        } else {
            showSnackbar(t('Unable to load service') + ' ' + t(service.message));
        }
    };

    const liveStream = (ServiceVideoUtils.liveNow(date) || ServiceVideoUtils.willBeLive(date));

    return (
        <div>
        <CardActionArea>
            <YouTubePlayer playerID={playerID} />
        </CardActionArea>
        <CardContent>
            {message !== ""
            ?
            <Typography gutterBottom variant="body1" component="p">
                {t(message)}
                {showCombinedServiceTooltip &&
                <span>
                &nbsp;
                <Tooltip title={t((isCantoneseService ? "Cantonese" : "English") + " service combined with Mandarin service")} arrow enterTouchDelay={25}>
                    <IconButton aria-label="info" size="small">
                    <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
                </span>
                }
            </Typography>
            :
            <Typography gutterBottom variant="body1" component="p">
                {DateTimeUtils.longServiceDateDisplay({datetime: date, showTimeToo: isRepeatService})} {t("worship service")}
                {showCombinedServiceTooltip &&
                <span>
                &nbsp;
                <Tooltip title={t((isCantoneseService ? "Cantonese" : "English") + " service combined with Mandarin service")} arrow enterTouchDelay={25}>
                    <IconButton aria-label="info" size="small">
                    <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
                </span>
                }
            </Typography>
            }
            {
            message !== "" && pastor !== "" &&
            <Typography variant="body2" color="textSecondary" component="p">
                {pastor} &middot; <ServiceDateDisplay serviceStartDateTime={date} showTimeToo={isRepeatService} />
            </Typography>
            }
            {
            message !== "" && pastor === "" && 
            <Typography variant="body2" color="textSecondary" component="p">
                <ServiceDateDisplay serviceStartDateTime={date} showTimeToo={isRepeatService} />
            </Typography>
            }
            {
            message === "" && pastor !== "" && !liveStream &&
            <Typography variant="body2" color="textSecondary" component="p">
                {pastor}
            </Typography>
            }
            {
            message === "" && pastor !== "" && liveStream &&
            <Typography variant="body2" color="textSecondary" component="p">
                {pastor} &middot; <ServiceDateDisplay serviceStartDateTime={date} showTimeToo={isRepeatService} />
            </Typography>
            }
            {
            message === "" && pastor === "" && liveStream &&
            <Typography variant="body2" color="textSecondary" component="p">
                <ServiceDateDisplay serviceStartDateTime={date} showTimeToo={isRepeatService} />
            </Typography>
            }
        </CardContent>
        <CardActions>
            <SeekToMenu seekPoints={seekPoints} onSeekTo={onSeekTo} youTubePlayerReady={youTubePlayerReady} />
            <RecentServicesMenu
                services={services}
                defaultServiceIndex={defaultServiceToShowIndex}
                onServiceSelect={onServiceSelect}
                onOlderServicesSelect={() => showSnackbar(t('TODO: Go to a page listing all worship services'))}
                youTubePlayerReady={youTubePlayerReady}
            />
        </CardActions>
        </div>
    );
}

ServicePlayer.propTypes = {
    playerID: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    isServiceCombinedWithMandarin: PropTypes.func.isRequired,
    showSnackbar: PropTypes.func.isRequired,
    youTubeIframeAPIReady: PropTypes.bool.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    cardWidth: PropTypes.number,
};