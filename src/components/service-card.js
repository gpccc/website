import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';

import ServicePlayer  from './service-player';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ServiceCard({services, showSnackbar}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ServicePlayer services={services} showSnackbar={showSnackbar} />
    </Card>
  );
}

ServiceCard.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    youtubeVideoID: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    pastor: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
      time: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  showSnackbar: PropTypes.func.isRequired,
};