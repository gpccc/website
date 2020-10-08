import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SermonCard from './components/sermon-card';

function App() {
    const sermons = [
        { youtubeVideoID: "EWQ__H_85bE", topic: "Ezra 4: Rebuilding Opposed", pastor: "Pastor Larry Lee", date: "2020-10-04" },
        { youtubeVideoID: "uqmaE9JKGtc", topic: "Ezra 3: First Comes Sacrifice", pastor: "Pastor Larry Lee", date: "2020-09-27" },
        { youtubeVideoID: "GA94lEQkKo0", topic: "Exodus 4:10-17: Talent", pastor: "Pastor Steven Chin", date: "2020-09-20" },
        { youtubeVideoID: "Q5x9gZWP6tM", topic: "Ezra 2: The Remnant", pastor: "Pastor Jerry Lin", date: "2020-09-13" },
    ];

    return (
        <div>

        <SermonCard sermons={sermons} />

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