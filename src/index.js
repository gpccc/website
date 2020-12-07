import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from  '@material-ui/core/Grid';

import { Provider } from 'react-redux';
import configureStore from  './store/configureStore';

import './i18n';

import './styles/site.css';

import ElevateAppBar from './components/elevate-app-bar.js';
import AppSnackbar from './components/app-snack-bar';
import ServiceCardContainer from './components/service-card-container';

import ChurchMapCard from './components/church-map-card';

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
        <ElevateAppBar>
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
            {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
        </ElevateAppBar>
        </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));