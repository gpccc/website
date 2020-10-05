import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardYouTube from './card-youtube'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SermonCard({youtubeVideoID, topic, pastor, date}) {
  const classes = useStyles();

  const dateDisplay = new Date(date + "T07:00:00Z")
    .toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardYouTube videoID={youtubeVideoID} />
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
        <Button size="small" color="primary" onClick={() => {CardYouTube.seekTo(0, 12, 35)}}>
          Seek to
        </Button>
        <Button size="small" color="primary" onClick={() => {CardYouTube.loadAndPlayVideo("Q5x9gZWP6tM")}}>
          Other sermons
        </Button>
      </CardActions>
    </Card>
  );
}

SermonCard.propTypes = {
  youtubeVideoID: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  pastor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}