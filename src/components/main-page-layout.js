import React from 'react';
import PropTypes from 'prop-types';

import ElevateAppBar from './elevate-app-bar.js';
import AppSnackbar from './app-snack-bar';

export default function MainPageLayout(props) {
    const [snackbarData, setSnackbarData] = React.useState("");
    const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <ElevateAppBar>
            {props.children(showSnackbar)}
            {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}
        </ElevateAppBar>
    );
}

MainPageLayout.propTypes = {
    children: PropTypes.func.isRequired,
};