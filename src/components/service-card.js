import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ServicePlayer  from './service-player';

import { makeStyles } from '@material-ui/core/styles';

import cantoneseServices from '../constants/cantonese-services';
import englishServices from '../constants/english-services';
import mandarinServices from '../constants/mandarin-services';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  tab: {
    lineHeight: 'normal',
    [theme.breakpoints.up("sm")]: {
      minWidth: 'inherit',
    }
  },
}));

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
      <ServicePlayer playerID={tabValue} services={services} showSnackbar={showSnackbar} />
    </div>
  );
}

export default function ServiceCard({showSnackbar}) {
  const classes = useStyles();

  const [activeTabValue, setActiveTabValue] = React.useState("english");
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  const handleChange = (event, newValue) => {
      setActiveTabValue(newValue);
  };

  const tabs = () => (
    <Tabs value={activeTabValue} onChange={handleChange} variant="fullWidth" aria-label="Worship services">
      <Tab className={classes.tab} label={"Cantonese service" + (isPlayingVideo && !isMuted ? " 🔊" : "")} value="cantonese" id="cantonese-tab" aria-controls="cantonese-tabpanel" />
      <Tab className={classes.tab} label={"English service" + (isPlayingVideo && !isMuted ? " 🔊" : "")} value="english" id="english-tab" aria-controls="english-tabpanel" />
      <Tab className={classes.tab} label={"Mandarin service"  + (isPlayingVideo && !isMuted ? " 🔊" : "")} value="mandarin" id="mandarin-tab" aria-controls="mandarin-tabpanel" />
    </Tabs>
  );

  return (
    <Card className={classes.root}>
      <CardHeader component={tabs} />
      <TabPanel activeTabValue={activeTabValue} tabValue="cantonese" services={cantoneseServices} showSnackbar={showSnackbar} />
      <TabPanel activeTabValue={activeTabValue} tabValue="english" services={englishServices} showSnackbar={showSnackbar} />
      <TabPanel activeTabValue={activeTabValue} tabValue="mandarin" services={mandarinServices} showSnackbar={showSnackbar} />
    </Card>
  );
}

TabPanel.propTypes = {
  activeTabValue: PropTypes.string.isRequired,
  tabValue: PropTypes.string.isRequired,
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

ServiceCard.propTypes = {
  showSnackbar: PropTypes.func.isRequired,
};