import React from 'react';
import ReactDOM from 'react-dom';

import ReactResizeDetector from 'react-resize-detector';

import Box from '@material-ui/core/Box';

import './i18n';

import './styles/site.css';

import ElevateAppBar from './components/elevate-app-bar.js';
import AppSnackbar from './components/app-snack-bar';
import ServiceCard from './components/service-card';

function App() {
    const [snackbarData, setSnackbarData] = React.useState("");
    const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <React.StrictMode>
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <div ref={targetRef}>
        <ElevateAppBar>
            <Box display="flex" justifyContent="center">
                <ServiceCard showSnackbar={showSnackbar} browserWidth={width} />
            </Box>
            {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
        </ElevateAppBar>
        </div>}
        </ReactResizeDetector>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));