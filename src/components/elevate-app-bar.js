import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
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
        </Container>
        </React.Fragment>
    );
}

ElevateAppBar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};