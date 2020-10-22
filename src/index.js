import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import AppSnackbar from './components/app-snack-bar';
import ServiceCard from './components/service-card';

function App() {
  const [snackbarData, setSnackbarData] = React.useState("");
  const showSnackbar = msg => setSnackbarData({ msg, date: new Date() });

    return (
        <React.StrictMode>
        <div>

          <ServiceCard showSnackbar={showSnackbar} />
          {snackbarData && <AppSnackbar msg={snackbarData.msg} key={snackbarData.date} />}

        {/*
        Li5Pd6IXhE4 10/4/2020
        AYadEf1YjVk
        R0ikzK-juhI
        uOjAL6YPG3U
        
        AlrtccfApe8 9/27/2020
        9/20/2020 missing - joint service with Mandarin
        aEijmDl2Qjg
        9/6/2020 missing - joint service with Mandarin
        */}
        </div>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));