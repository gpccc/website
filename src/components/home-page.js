import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from  '@material-ui/core/Grid';

import ServiceCardContainer from './service-card-container';

import ChurchMapCard from './church-map-card';

import MainPageLayout from './main-page-layout';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <MainPageLayout>
        {showSnackbar => (
            <div className={classes.root}>
            <Grid container justify="space-evenly" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ServiceCardContainer showSnackbar={showSnackbar} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ChurchMapCard />
                </Grid>
            </Grid>
            </div>
        )}
        </MainPageLayout>
    );
}