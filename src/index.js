import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SermonCard from './components/sermon-card';

function App() {
    return (
        <div>

        <SermonCard youtubeVideoID="EWQ__H_85bE" topic="Ezra 4: Rebuilding Opposed" pastor="Pastor Larry Lee" date="October 4, 2020" />

        {/*
        <SermonCard youtubeVideoID="uqmaE9JKGtc" topic="Ezra 3: First Comes Sacrifice" pastor="Pastor Larry Lee" date="September 27, 2020" />
        <SermonCard youtubeVideoID="GA94lEQkKo0" topic="Exodus 4:10-17: Talent" pastor="Pastor Steven Chin" date="September 20, 2020" />
        <SermonCard youtubeVideoID="Q5x9gZWP6tM" topic="Ezra 2: The Remnant" pastor="Pastor Jerry Lin" date="September 13, 2020" />
        
        <iframe width="560" height="315" src="AYadEf1YjVk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        R0ikzK-juhI
        uOjAL6YPG3U
        0m2rEJ8KI64

        <iframe width="560" height="315" src="AlrtccfApe8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        9/20/2020 missing - joint service with Mandarin
        aEijmDl2Qjg
        9/6/2020 missing - joint service with Mandarin
        */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));