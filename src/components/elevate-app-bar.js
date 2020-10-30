import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import { useTranslation } from 'react-i18next';

import LanguageMenu from './language-menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar variant="dense">
            <Typography variant="h6" className={`${classes.title} ${classes.sectionDesktop}`}>{t("GP full name")}</Typography>
            <Typography variant="h6" className={`${classes.title} ${classes.sectionMobile}`}>{t("GP short name")}</Typography>
            <LanguageMenu />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        {props.children}
        <Box my={2}>
        <p><b>(filler text to test scrolling)</b></p>
        <p><b>OUR BELIEF</b></p>
        <p><b>We believe</b> the Scriptures of the Old and New Testaments to be verbally inspired by God, being inerrant in the original text and it is the foundation of and the supreme authority for Christian faith, service, and life.</p>
        <p><b>We believe</b> in the one and only, never changing, absolutely holy God, who exists eternally as Father, Son, and Holy Spirit. He is the object of our worship and the subject of our praise.</p>
        <p><b>We believe</b> that Jesus Christ is the only begotten Son of God, conceived by the Holy Spirit, born of the virgin Mary. Word becoming flesh, and absolute sinless.</p>
        <p><b>We believe</b> in the Holy Spirit who was sent by the Father and the Son to reprove the world of sin, and lead people to repentance. He is continually at work convicting, convincing, and comforting. He indwells the believer fully at the point of salvation.</p>
        <p><b>We believe</b> that God created man in His own image, but that through the disobedience of Adam and Eve, all people are sinners both by nature and practice, and thus have inherited not only physical death as well.</p>
        <p><b>We believe</b> that the only way to be saved is to accept the salvation of Jesus Christ. Those who repent and accept this gift by faith, apart from any works, have experienced the new birth and are eternally secure.</p>
        <p><b>We believe</b> that Jesus Christ will return to judge the world according to His promise. Moreover, all men, good or evil, will be resurrected and to be judged in the Last Days. All who placed faith in Christ will receive eternal life, and all those have not believed will fall into eternal condemnation.</p>
        <p><b>We believe</b> that the Church, the Body of Christ, exists on both a local and universal level, with Jesus Christ as its Head.</p>
        <p><b>We believe</b> that every born again believer has the responsibility to be an active participant in a local church which should exist to glorify God by: Acknowledging God’s worth through worship, equipping the believers for ministry, building the Body through fellowship, and most importantly, preaching the Gospel of our Lord Jesus Christ and making disciples of all believers.</p>
        </Box>
      </Container>
    </React.Fragment>
  );
}

ElevateAppBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};