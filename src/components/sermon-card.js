import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SermonCard({youtubeVideoID, topic, pastor, date}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + youtubeVideoID}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {topic}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pastor} &middot; {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Seek
        </Button>
        <Button size="small" color="primary">
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