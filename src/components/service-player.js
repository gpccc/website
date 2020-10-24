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

import YouTubePlayer from './youtube-player';

import ServiceDateDisplay from './service-date-display';

import SeekToMenu from './seek-to-menu';
import RecentServicesMenu from './recent-services-menu';

import DateTimeUtils from '../modules/datetime-utils';

import { SERVICE_CARD_MAX_WIDTH, SERVICE_VIDEO_WIDTH, SERVICE_VIDEO_HEIGHT } from '../constants/service-constants'

const calcYouTubePlayerHeight = (playerWidth) => (
  playerWidth * SERVICE_VIDEO_HEIGHT / SERVICE_VIDEO_WIDTH
);

export default function ServicePlayer({playerID, services, isServiceCombinedWithMandarin, showSnackbar, youTubeIframeAPIReady, cardWidth}) {
  if (!youTubeIframeAPIReady) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  const [serviceToShow, setServiceToShow] = React.useState(services[0]);
  const youTubePlayerRef = React.useRef(null);

  const youtubeVideoID = serviceToShow.youtubeVideoID;
  const message = serviceToShow.message;
  const pastor = serviceToShow.pastor;
  const date = serviceToShow.date;
  const seekPoints = serviceToShow.seekPoints;

  const isCantoneseService = (playerID === "cantonese");
  const isCombinedService = isServiceCombinedWithMandarin(youtubeVideoID);
  const showCombinedServiceTooltip = (isCombinedService && (isCantoneseService || playerID === "english"));

  React.useEffect(
    () => {
      const width = cardWidth || SERVICE_CARD_MAX_WIDTH;
      const height = calcYouTubePlayerHeight(width);

      if (!youTubePlayerRef.current) {
        const youtubePlayer = new window.YT.Player(playerID, {
          width,
          height,
          videoId: youtubeVideoID,
          events: {
            'onStateChange': onPlayerStateChange
          },
        });
        youTubePlayerRef.current = youtubePlayer;
      } else {
        youTubePlayerRef.current.setSize(width, height)
      }
    }, [youTubePlayerRef, cardWidth]
  );

  const onPlayerStateChange = event => {
    const playing = event.data === window.YT.PlayerState.PLAYING;
    console.info(playerID, playing ? "playing" : "NOT playiing");
  }

  const onSeekTo = (seekPoint) => {
    const time = DateTimeUtils.parse(seekPoint.time);
    if (time.valid && youTubePlayerRef.current) {
      const seconds = ((60 * time.hour) + time.minute) * 60 + time.second;
      youTubePlayerRef.current.seekTo(seconds, true /* allowSeekAhead */);
    } else {
      showSnackbar('Unable to seek to ' + seekPoint.label);
    }
  };

  const onServiceSelect = (service) => {
    if (youTubePlayerRef.current) {
      setServiceToShow(service);
      youTubePlayerRef.current.cueVideoById(service.youtubeVideoID);
    } else {
      showSnackbar('Unable to load service ' + service.message);
    }
  };

  return (
    <div>
      <CardActionArea>
        <YouTubePlayer playerID={playerID} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="body1" component="p">
          {message}
          {showCombinedServiceTooltip &&
          <span>
          &nbsp;
          <Tooltip title={(isCantoneseService ? "Cantonese" : "English") + " service combined with Mandarin service"} arrow enterTouchDelay={25}>
            <IconButton aria-label="info" size="small">
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          </span>
          }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {pastor} &middot; <ServiceDateDisplay serviceStartDateTime={date} />
        </Typography>
      </CardContent>
      <CardActions>
        <SeekToMenu seekPoints={seekPoints} onSeekTo={onSeekTo} />
        <RecentServicesMenu
          services={services}
          onServiceSelect={onServiceSelect}
          onOlderServicesSelect={() => showSnackbar('TODO: Go to a page listing all worship services')}
        />
      </CardActions>
    </div>
  );
}

ServicePlayer.propTypes = {
  playerID: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.shape({
    youtubeVideoID: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    pastor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  isServiceCombinedWithMandarin: PropTypes.func.isRequired,
  showSnackbar: PropTypes.func.isRequired,
  youTubeIframeAPIReady: PropTypes.bool.isRequired,
  cardWidth: PropTypes.number,
};