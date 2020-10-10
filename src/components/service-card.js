import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import YouTubePlayer from './youtube-player';

import SeekToMenu from './seek-to-menu';
import RecentServicesMenu from './recent-services-menu';

import AppSnackbar from './app-snack-bar';

import TimeUtils from '../modules/time-utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ServiceCard({services}) {
  const classes = useStyles();
  const [serviceToShow, setServiceToShow] = React.useState(services[0]);

  const [snackbarData, setSnackbarData] = React.useState("");
  const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

  const youtubeVideoID = serviceToShow.youtubeVideoID;
  const topic = serviceToShow.topic;
  const pastor = serviceToShow.pastor;
  const date = serviceToShow.date;
  const seekPoints = serviceToShow.seekPoints;

  const dateDisplay = TimeUtils.longDateDisplay(date, 'long');

  const onSeekTo = (seekPoint) => {
    const time = TimeUtils.parse(seekPoint.time);
    if (time.valid) {
      YouTubePlayer.seekTo(time.hour, time.minute, time.second);
    } else {
      showSnackbar('Unable to seek to ' + seekPoint.label)
    }
  };

  const onServiceSelect = (service) => {
    setServiceToShow(service);
    YouTubePlayer.loadAndPlayVideo(service.youtubeVideoID);
  }

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <YouTubePlayer videoID={youtubeVideoID} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {topic}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pastor} &middot; {dateDisplay}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SeekToMenu seekPoints={seekPoints} onSeekTo={onSeekTo}/>
        <RecentServicesMenu
          services={services}
          onServiceSelect={onServiceSelect}
          onOlderServicesSelect={() => showSnackbar('TODO: Go to a page listing all worship services')}
        />
      </CardActions>
    </Card>
    {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
    </div>
  );
}

ServiceCard.propTypes = {
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
}