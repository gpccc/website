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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SermonCard({sermons}) {
  const classes = useStyles();

  const sermonToShow = sermons[1];
  const youtubeVideoID = sermonToShow.youtubeVideoID;
  const topic = sermonToShow.topic;
  const pastor = sermonToShow.pastor;
  const date = sermonToShow.date;

  const dateDisplay = new Date(date + "T07:00:00Z")
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});

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
        <Button size="small" color="primary" onClick={() => {YouTubeCard.seekTo(0, 12, 35)}}>
          Seek to
        </Button>
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