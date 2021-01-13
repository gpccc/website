import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from  '@material-ui/core/Grid';

import { Provider } from 'react-redux';
import configureStore, { history } from  './store/configureStore';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route }  from 'react-router-dom';

import './i18n';

import './styles/site.css';

import ElevateAppBar from './components/elevate-app-bar.js';
import AppSnackbar from './components/app-snack-bar';
import ServiceCardContainer from './components/service-card-container';

import ChurchMapCard from './components/church-map-card';

import StaffCardStandard from './components/staff-card-standard';
import StaffCardSameAspectRatio from './components/staff-card-same-aspect-ratio';
import StaffCardBorder from './components/staff-card-border';
import StaffCardCity from './components/staff-card-city';
import StaffCard from './components/staff-card';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const initialState = {};
const store = configureStore(initialState);

function App() {
    const classes = useStyles();

    const [snackbarData, setSnackbarData] = React.useState("");
    const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/">
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
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));