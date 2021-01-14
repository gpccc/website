import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from  '@material-ui/core/Grid';

import StaffCardStandard from './staff-card-standard';
import StaffCardSameAspectRatio from './staff-card-same-aspect-ratio';
import StaffCardBorder from './staff-card-border';
import StaffCardCity from './staff-card-city';
import StaffCard from './staff-card';

import MainPageLayout from './main-page-layout';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export default function StaffPage() {
    const classes = useStyles();

    return (
        <MainPageLayout>
        {() => (
            <div className={classes.root}>
            <Grid container justify="space-evenly" spacing={2}>
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
        )}
        </MainPageLayout>
    );
}