import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

export default function YouTubePlayer({playerID, videoID}) {
  return (
    <CardMedia
      component="div"
      frameBorder="0"
      id={playerID}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    />
  );
}

YouTubePlayer.propTypes = {
  playerID: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired,
}