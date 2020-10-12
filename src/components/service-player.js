import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import YouTubePlayer from './youtube-player';

import SeekToMenu from './seek-to-menu';
import RecentServicesMenu from './recent-services-menu';

import DateTimeUtils from '../modules/datetime-utils';

import LiveStreamState from '../constants/live-stream-state';

export default function ServicePlayer({playerID, services, showSnackbar}) {
  const [serviceToShow, setServiceToShow] = React.useState(services[0]);

  const youtubeVideoID = serviceToShow.youtubeVideoID;
  const topic = serviceToShow.topic;
  const pastor = serviceToShow.pastor;
  const date = serviceToShow.date;
  const seekPoints = serviceToShow.seekPoints;
  const liveStreamState = getLiveStreamState(date);

  function getLiveStreamState(serviceStartDateTime) {
    const serviceStartTime = new Date(serviceStartDateTime);
  
    const serviceEndTime = new Date(serviceStartDateTime);
    serviceEndTime.setMinutes(serviceEndTime.getMinutes() + 60+20);
  
    const nowTime  = new Date();
  
    const willBeLive = nowTime < serviceStartTime;
    const liveNow = serviceStartTime <= nowTime && nowTime <= serviceEndTime;
  
    let state = LiveStreamState.NOT_APPLICABLE;
    if (willBeLive) {
      state = LiveStreamState.WILL_BE_LIVE;
    } else if (liveNow) {
      state = LiveStreamState.LIVE_NOW;
    }

    return state;
  }

  const onSeekTo = (seekPoint) => {
    const time = DateTimeUtils.parse(seekPoint.time);
    if (time.valid) {
      YouTubePlayer.seekTo(playerID, time.hour, time.minute, time.second);
    } else {
      showSnackbar('Unable to seek to ' + seekPoint.label);
    }
  };

  const onServiceSelect = (service) => {
    setServiceToShow(service);
    YouTubePlayer.loadAndPlayVideo(playerID, service.youtubeVideoID);
  };

  return (
    <div>
      <CardActionArea>
        <YouTubePlayer playerID={playerID} videoID={youtubeVideoID} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {topic}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {pastor} &middot; {
            liveStreamState===LiveStreamState.WILL_BE_LIVE
            ? <Box color="secondary.main" component="span">Live {DateTimeUtils.dateTimeDisplay(date)}</Box>
            : liveStreamState===LiveStreamState.LIVE_NOW
              ? <Box color="secondary.main" component="span">Live now</Box>
              : DateTimeUtils.longMonthDateDisplay(date)
          }
        </Typography>
      </CardContent>
      <CardActions>
        <SeekToMenu seekPoints={seekPoints} onSeekTo={onSeekTo}/>
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
    topic: PropTypes.string.isRequired,
    pastor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  showSnackbar: PropTypes.func.isRequired,
};