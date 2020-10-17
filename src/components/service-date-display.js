import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import DateTimeUtils from '../modules/datetime-utils';

const serviceDurationInSeconds = (60+20)*60;

export default function ServiceDateDisplay({serviceStartDateTime}) {
  const noTimerID = -1;
  const [serviceStart, setServiceStart] = React.useState("");
  const [timerID, setTimerID] = React.useState(noTimerID);
  
  React.useEffect(
    () => {
      if (serviceStartDateTime === serviceStart) {
        return;
      }
      
      if (timerID !== noTimerID) {
        window.clearTimeout(timerID);
        setTimerID(noTimerID);
      }
  
      if (secondsElapsedSince <= serviceDurationInSeconds) {
        if (secondsElapsedSince < 0) {
          secondsElapsedSince = Math.abs(secondsElapsedSince);
        } else {
          secondsElapsedSince = serviceDurationInSeconds - secondsElapsedSince;
          if (secondsElapsedSince == 0) {
            secondsElapsedSince += 1;
          }
        }

        const timer = setTimeout(() => {
          window.clearTimeout(timer);
          setTimerID(noTimerID);
          setServiceStart("");
        }, secondsElapsedSince*1000);

        setTimerID(timer);
      }
  
      setServiceStart(serviceStartDateTime);
    },
  );
  
  function getSecondsElapsedSince(sinceDateTime) {
    const sinceTime = new Date(sinceDateTime).getTime();
    const nowTime  = new Date().getTime();

    const secondsElapsed = (nowTime - sinceTime) / 1000;
    return Math.round(secondsElapsed);
  }

  let secondsElapsedSince = getSecondsElapsedSince(serviceStartDateTime);
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