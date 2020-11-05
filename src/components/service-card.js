import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ReactResizeDetector from 'react-resize-detector';

import { useTranslation } from 'react-i18next';

import ServicePlayer  from './service-player';

import { makeStyles } from '@material-ui/core/styles';

import { JOINT_SERVICE, SERVICE_CARD_MAX_WIDTH } from '../constants/service-constants';

import cantoneseServices from '../constants/cantonese-services';
import englishServices from '../constants/english-services';
import mandarinServices from '../constants/mandarin-services';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 16384 + SERVICE_CARD_MAX_WIDTH - SERVICE_CARD_MAX_WIDTH, // SERVICE_CARD_MAX_WIDTH,
    },
    tab: {
        lineHeight: 'normal',
        [theme.breakpoints.up("sm")]: {
            minWidth: 'inherit',
        }
    },
}));

function TabPanel(props) {
    const { activeTabValue, tabValue, services, showSnackbar, youTubeIframeAPIReady, onPlayPause, cardWidth, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={activeTabValue !== tabValue}
        id={`${tabValue}-tabpanel`}
        aria-labelledby={`${tabValue}-tab`}
        {...other}
        >
        <ServicePlayer playerID={tabValue} services={services} showSnackbar={showSnackbar}
            isServiceCombinedWithMandarin={isServiceCombinedWithMandarin}
            youTubeIframeAPIReady={youTubeIframeAPIReady}
            onPlayPause={onPlayPause}
            cardWidth={cardWidth}
        />
        </div>
    );
}

function findService(youtubeVideoID, services) {
    const service = services.find(s => s.youtubeVideoID === youtubeVideoID && s.message !== JOINT_SERVICE);
    return service;
}

function replaceJointServices(targetServices, sourceServices) {
    targetServices.forEach((target, i) => {
        if (target.message !== JOINT_SERVICE) {
            return;
        }

        const jointService = findService(target.youtubeVideoID, sourceServices);
        if (jointService === undefined) {
            console.error('Cannot find YouTube video ID', target.youtubeVideoID, 'in', sourceServices);
            return;
        }

        targetServices[i] = jointService;
    });
}

function isServiceCombinedWithMandarin(youtubeVideoID) {
    return mandarinServices.some((service) => service.youtubeVideoID === youtubeVideoID);
}

export default function ServiceCard({showSnackbar}) {
    const classes = useStyles();

    const [youTubeIframeAPIReady, setYouTubeIframeAPIReady] = React.useState(false);

    const [activeTabValue, setActiveTabValue] = React.useState("english");
    const [isPlayingCantoneseVideo, setPlayingCantoneseVideo] = React.useState(false);
    const [isPlayingEnglishVideo, setPlayingEnglishVideo] = React.useState(false);
    const [isPlayingMandarinVideo, setPlayingMandarinVideo] = React.useState(false);

    const handleChange = (event, newValue) => {
        setActiveTabValue(newValue);
    };
    
    const handlePlayPauseChange = (service, isPlaying) => {
        if (service === "cantonese") {
            setPlayingCantoneseVideo(isPlaying);
        }
        else if (service === "english") {
            setPlayingEnglishVideo(isPlaying);
        }
        else if (service === "mandarin") {
            setPlayingMandarinVideo(isPlaying);
        }
    };

    const tabs = () => {
        const { t } = useTranslation();

        return (
            <Tabs value={activeTabValue} onChange={handleChange} variant="fullWidth" aria-label="Worship services">
            <Tab className={classes.tab} label={t("Cantonese service") + (isPlayingCantoneseVideo ? " ▶" : "")} value="cantonese" id="cantonese-tab" aria-controls="cantonese-tabpanel" />
            <Tab className={classes.tab} label={t("English service") + (isPlayingEnglishVideo ? " ▶" : "")} value="english" id="english-tab" aria-controls="english-tabpanel" />
            <Tab className={classes.tab} label={t("Mandarin service")  + (isPlayingMandarinVideo ? " ▶" : "")} value="mandarin" id="mandarin-tab" aria-controls="mandarin-tabpanel" />
            </Tabs>
        );
    };

    if (!youTubeIframeAPIReady) {
        if (window.YT) {
            setYouTubeIframeAPIReady(true);
        } else {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            window.onYouTubeIframeAPIReady = () => setYouTubeIframeAPIReady(true);

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

    replaceJointServices(cantoneseServices, mandarinServices);
    replaceJointServices(englishServices, mandarinServices);

    return (
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card className={classes.root} ref={targetRef}>
            <CardHeader component={tabs} />
            <TabPanel activeTabValue={activeTabValue} tabValue="cantonese" services={cantoneseServices} showSnackbar={showSnackbar} youTubeIframeAPIReady={youTubeIframeAPIReady} onPlayPause={handlePlayPauseChange} cardWidth={width} />
            <TabPanel activeTabValue={activeTabValue} tabValue="english" services={englishServices} showSnackbar={showSnackbar} youTubeIframeAPIReady={youTubeIframeAPIReady} onPlayPause={handlePlayPauseChange} cardWidth={width} />
            <TabPanel activeTabValue={activeTabValue} tabValue="mandarin" services={mandarinServices} showSnackbar={showSnackbar} youTubeIframeAPIReady={youTubeIframeAPIReady} onPlayPause={handlePlayPauseChange} cardWidth={width} />
        </Card>}
        </ReactResizeDetector>
    );
}

TabPanel.propTypes = {
    activeTabValue: PropTypes.string.isRequired,
    tabValue: PropTypes.string.isRequired,
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
    showSnackbar: PropTypes.func.isRequired,
    youTubeIframeAPIReady: PropTypes.bool.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    cardWidth: PropTypes.number,
};

ServiceCard.propTypes = {
    showSnackbar: PropTypes.func.isRequired,
};