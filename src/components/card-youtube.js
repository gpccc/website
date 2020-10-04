import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

export default class YouTubeCard extends React.Component {
  render() {
    const videoID = this.props.videoID;

    return (
      <CardMedia
        component="iframe"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoID}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    );
  }
}

YouTubeCard.propTypes = {
  videoID: PropTypes.string.isRequired,
}