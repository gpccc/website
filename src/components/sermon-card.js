import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SermonSelect from './sermon-select';
import YouTubeCard from './youtube-card';
import SeekToMenu from './seek-to-menu';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const seekPoints = [
  {time: "00:00:00", label: "Beginning"},
  {time: "00:10:57", label: "Opening prayer"},
  {time: "00:12:35", label: "O Come to the Altar"},
  {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49"},
  {time: "00:19:20", label: "Rock of Ages (You will Stand)"},
  {time: "00:23:46", label: "Gracefully Broken"},
  {time: "00:28:54", label: "The Wonderful Cross"},
  {time: "00:34:17", label: "Congregational prayer"},
  {time: "00:36:01", label: "Communion"},
  {time: "00:44:23", label: "Message"},
  {time: "01:23:01", label: "Announcements"},
  {time: "01:24:45", label: "Benediction"},
];

export default function SermonCard({sermons}) {
  const classes = useStyles();

  const sermonToShow = sermons[0];
  const youtubeVideoID = sermonToShow.youtubeVideoID;
  const topic = sermonToShow.topic;
  const pastor = sermonToShow.pastor;
  const date = sermonToShow.date;

  const dateDisplay = new Date(date + "T07:00:00Z")
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});

  const onSeekTo = (seekPoint) => {
    const time = seekPoint.time.split(":");
    if (time.length !== 3) {
      return;
    }

    const hour = +time[0];
    const minute = +time[1];
    const second = +time[2];

    if (hour < 0 || minute < 0 || minute > 59 || second < 0 || second > 59) {
      return;
    }

    YouTubeCard.seekTo(hour, minute, second);
  };

  return (
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
        <Button size="small" color="primary" onClick={() => {YouTubeCard.loadAndPlayVideo("Q5x9gZWP6tM")}}>
          Recent sermons
        </Button>
        <SermonSelect />
      </CardActions>
    </Card>
  );
}

SermonCard.propTypes = {
  sermons: PropTypes.arrayOf(PropTypes.shape({
    youtubeVideoID: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    pastor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
}