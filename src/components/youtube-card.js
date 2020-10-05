import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

const ID = "youtubeFrame";

export default class YouTubeCard extends React.Component {
  static seekTo(hour, minute, second) {
    const seconds = ((60 * hour) + minute) * 60 + second;

    const iframe = document.getElementById(ID);

    // https://stackoverflow.com/questions/7443578/youtube-iframe-api-how-do-i-control-an-iframe-player-thats-already-in-the-html
    iframe.contentWindow.postMessage(JSON.stringify({
      "event": "command",
      "func": "seekTo",
      "args": [seconds, true],
      "id": ID
    }), "*");
  }

  static loadAndPlayVideo(videoID) {
    const iframe = document.getElementById(ID);

    iframe.contentWindow.postMessage(JSON.stringify({
      "event": "command",
      "func": "loadVideoById",
      "args": [videoID],
      "id": ID
    }), "*");
  }

  render() {
    const videoID = this.props.videoID;

    return (
      <CardMedia
        component="iframe"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoID + "?enablejsapi=1"}
        frameBorder="0"
        id={ID}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
    );
  }
}

YouTubeCard.propTypes = {
  videoID: PropTypes.string.isRequired,
}