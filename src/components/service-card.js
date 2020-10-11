import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ServicePlayer  from './service-player';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function TabPanel(props) {
  const { activeTabValue, tabValue, services, showSnackbar, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeTabValue !== tabValue}
      id={`${tabValue}-tabpanel`}
      aria-labelledby={`${tabValue}-tab`}
      {...other}
    >
      <ServicePlayer services={services} showSnackbar={showSnackbar} />
    </div>
  );
}

export default function ServiceCard({services, showSnackbar}) {
  const classes = useStyles();

  const [activeTabValue, setActiveTabValue] = React.useState("english");

  const handleChange = (event, newValue) => {
      setActiveTabValue(newValue);
  };

  const tabs = () => (
    <Tabs value={activeTabValue} onChange={handleChange} aria-label="Worship services">
      <Tab label="Cantonese" value="cantonese" id="cantonese-tab" aria-controls="cantonese-tabpanel" />
      <Tab label="English" value="english" id="english-tab" aria-controls="english-tabpanel" />
      <Tab label="Mandarin" value="mandarin" id="mandarin-tab" aria-controls="mandarin-tabpanel" />
    </Tabs>
  );

  return (
    <Card className={classes.root}>
      <CardHeader component={tabs} />
      <TabPanel activeTabValue={activeTabValue} tabValue="cantonese" services={services} showSnackbar={showSnackbar} />
      <TabPanel activeTabValue={activeTabValue} tabValue="english" services={services} showSnackbar={showSnackbar} />
      <TabPanel activeTabValue={activeTabValue} tabValue="mandarin" services={services} showSnackbar={showSnackbar} />
    </Card>
  );
}

TabPanel.propTypes = {
  activeTabValue: PropTypes.string.isRequired,
  tabValue: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  showSnackbar: PropTypes.func.isRequired,
};

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