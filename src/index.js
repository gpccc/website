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

        {/*
        10/4/2020
        0 Beginning
        10:57 Opening prayer
        12:35 O Come to the Altar
        18:02 Psalm 18:2-6, 16-17, 46, 49
        19:20 Rock of Ages (You will Stand)
        23:46 Gracefully Broken
        28:54 The Wonderful Cross
        34:17 Congregational prayer
        36:01 Communion
        44:23 Message
        1:23:01 Announcements
        1:24:45 Benediction
        */}

        <SermonCard sermons={sermons} />

        {/*
        <SermonCard youtubeVideoID="uqmaE9JKGtc" topic="Ezra 3: First Comes Sacrifice" pastor="Pastor Larry Lee" date="September 27, 2020" />
        <SermonCard youtubeVideoID="GA94lEQkKo0" topic="Exodus 4:10-17: Talent" pastor="Pastor Steven Chin" date="September 20, 2020" />
        <SermonCard youtubeVideoID="Q5x9gZWP6tM" topic="Ezra 2: The Remnant" pastor="Pastor Jerry Lin" date="September 13, 2020" />
        
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