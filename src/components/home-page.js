import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from  '@material-ui/core/Grid';

import ElevateAppBar from './elevate-app-bar.js';
import AppSnackbar from './app-snack-bar';
import ServiceCardContainer from './service-card-container';

import ChurchMapCard from './church-map-card';

import StaffCardStandard from './staff-card-standard';
import StaffCardSameAspectRatio from './staff-card-same-aspect-ratio';
import StaffCardBorder from './staff-card-border';
import StaffCardCity from './staff-card-city';
import StaffCard from './staff-card';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    const classes = useStyles();

    const [snackbarData, setSnackbarData] = React.useState("");
    const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <ElevateAppBar>
        <div className={classes.root}>
        <Grid container justify="space-evenly" spacing={2}>
            <Grid item xs={12} sm={6}>
                <ServiceCardContainer showSnackbar={showSnackbar} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ChurchMapCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <StaffCardStandard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <StaffCardSameAspectRatio />
            </Grid>
            <Grid item xs={12} sm={4}>
                <StaffCardBorder />
            </Grid>
            <Grid item xs={12} sm={4}>
                <StaffCardCity />
            </Grid>
            <Grid item xs={12} sm={4}>
                <StaffCard />
            </Grid>
        </Grid>
        </div>
        {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
        </ElevateAppBar>
    );
}

HomePage.propTypes = {
};