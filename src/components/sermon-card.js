import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import YouTubeCard from './youtube-card';

import SeekToMenu from './seek-to-menu';
import RecentSermonsMenu from './recent-sermons-menu';

import AppSnackbar from './app-snack-bar';

import TimeUtils from '../modules/time-utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SermonCard({sermons}) {
  const classes = useStyles();
  const [sermonToShow, setSermonToShow] = React.useState(sermons[0]);

  const [snackbarData, setSnackbarData] = React.useState("");
  const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

  const youtubeVideoID = sermonToShow.youtubeVideoID;
  const topic = sermonToShow.topic;
  const pastor = sermonToShow.pastor;
  const date = sermonToShow.date;
  const seekPoints = sermonToShow.seekPoints;

  const dateDisplay = new Date(date + "T07:00:00Z")
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});

  const onSeekTo = (seekPoint) => {
    const time = TimeUtils.parse(seekPoint.time);
    if (time.valid) {
      YouTubeCard.seekTo(time.hour, time.minute, time.second);
    }
  };

  const onSermonSelect = (sermon) => {
    setSermonToShow(sermon);
    YouTubeCard.loadAndPlayVideo(sermon.youtubeVideoID);
  }

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <YouTubeCard videoID={youtubeVideoID} />
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
        <RecentSermonsMenu
          sermons={sermons}
          onSermonSelect={onSermonSelect}
          onOlderSermonsSelect={() => showSnackbar('TODO: Display a page listing all worship services')}
        />
      </CardActions>
    </Card>
    {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
    </div>
  );
}

SermonCard.propTypes = {
  sermons: PropTypes.arrayOf(PropTypes.shape({
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