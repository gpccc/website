import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import englishServices from './constants/english-services';

import ServiceCard from './components/service-card';

function App() {
    return (
        <div>

          <ServiceCard services={englishServices} />

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
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));