import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import DateTimeUtils from '../modules/datetime-utils';

const serviceDurationInSeconds = (60+20)*60;

export default function ServiceDateDisplay({serviceStartDateTime}) {
  function getSecondsElapsedSince(sinceDateTime) {
    const sinceTime = new Date(sinceDateTime).getTime();
    const nowTime  = new Date().getTime();

    const secondsElapsed = (nowTime - sinceTime) / 1000;
    return Math.round(secondsElapsed);
  }

  const secondsElapsedSince = getSecondsElapsedSince(serviceStartDateTime);
  return (
    secondsElapsedSince < 0
    ? <Box color="secondary.main" component="span">Live {DateTimeUtils.humanMMDDHHMMDisplay(serviceStartDateTime)}</Box>
    : secondsElapsedSince <= serviceDurationInSeconds
        ? <Box color="secondary.main" component="span">Live now</Box>
        : DateTimeUtils.longServiceDateDisplay(serviceStartDateTime)
  );
}

ServiceDateDisplay.propTypes = {
    serviceStartDateTime: PropTypes.string.isRequired,
};