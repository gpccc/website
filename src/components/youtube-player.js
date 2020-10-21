import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

export default class YouTubePlayer extends React.Component {
  render() {
    const playerID = this.props.playerID;
    const videoID = this.props.videoID;

    return (
      <CardMedia
        component="iframe"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoID + "?enablejsapi=1"}
        frameBorder="0"
        id={playerID}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    );
  }
}

YouTubePlayer.propTypes = {
  playerID: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired,
}