import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import DateTimeUtils from '../modules/datetime-utils';

import LiveStreamState from '../constants/live-stream-state';

export default function ServiceDateDisplay({serviceStartDateTime}) {
  function getLiveStreamState(serviceStartDateTime) {
    const serviceStartTime = new Date(serviceStartDateTime);
  
    const serviceEndTime = new Date(serviceStartDateTime);
    serviceEndTime.setMinutes(serviceEndTime.getMinutes() + 60+20);
  
    const nowTime  = new Date();
  
    const willBeLive = nowTime < serviceStartTime;
    const liveNow = serviceStartTime <= nowTime && nowTime <= serviceEndTime;
  
    let state = LiveStreamState.NOT_APPLICABLE;
    if (willBeLive) {
      state = LiveStreamState.WILL_BE_LIVE;
    } else if (liveNow) {
      state = LiveStreamState.LIVE_NOW;
    }

    return state;
  }

  const liveStreamState = getLiveStreamState(serviceStartDateTime);

  return (
    liveStreamState===LiveStreamState.WILL_BE_LIVE
    ? <Box color="secondary.main" component="span">Live {DateTimeUtils.monthDayHourMinuteDisplay(serviceStartDateTime)}</Box>
    : liveStreamState===LiveStreamState.LIVE_NOW
        ? <Box color="secondary.main" component="span">Live now</Box>
        : DateTimeUtils.longServiceDateDisplay(serviceStartDateTime)
  );
}

ServiceDateDisplay.propTypes = {
    serviceStartDateTime: PropTypes.string.isRequired,
};