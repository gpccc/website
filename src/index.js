import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from  './store/configureStore';

import './i18n';

import './styles/site.css';

import ElevateAppBar from './components/elevate-app-bar.js';
import AppSnackbar from './components/app-snack-bar';
import ServiceCard from './components/service-card';

const initialState = {};
const store = configureStore(initialState);

function App() {
    const [snackbarData, setSnackbarData] = React.useState("");
    const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <React.StrictMode>
        <Provider store={store}>
        <ElevateAppBar>
            <ServiceCard showSnackbar={showSnackbar} />
            {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
        </ElevateAppBar>
        </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));