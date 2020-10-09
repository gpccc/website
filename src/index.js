import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SermonCard from './components/sermon-card';

function App() {
    const sermons = [
        { youtubeVideoID: "EWQ__H_85bE", topic: "Ezra 4: Rebuilding Opposed", pastor: "Pastor Larry Lee", date: "2020-10-04", duration: "01:25:45", seekPoints: [
            {time: "00:00:00", label: "Beginning"},
            {time: "00:10:57", label: "Opening prayer"},
            {time: "00:12:35", label: "O Come to the Altar"},
            {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49"},
            {time: "00:19:20", label: "Rock of Ages (You will Stand)"},
            {time: "00:23:46", label: "Gracefully Broken"},
            {time: "00:28:54", label: "The Wonderful Cross"},
            {time: "00:34:17", label: "Congregational prayer"},
            {time: "00:36:01", label: "Communion"},
            {time: "00:44:23", label: "Message"},
            {time: "01:23:01", label: "Announcements"},
            {time: "01:24:45", label: "Benediction"},
        ]},
        { youtubeVideoID: "uqmaE9JKGtc", topic: "Ezra 3: First Comes Sacrifice", pastor: "Pastor Larry Lee", date: "2020-09-27", duration: "01:28:35", seekPoints: []},
        { youtubeVideoID: "GA94lEQkKo0", topic: "Exodus 4:10-17: Talent", pastor: "Pastor Steven Chin", date: "2020-09-20", duration: "01:23:41", seekPoints: [] },
        { youtubeVideoID: "Q5x9gZWP6tM", topic: "Ezra 2: The Remnant", pastor: "Pastor Jerry Lin", date: "2020-09-13", duration: "01:24:50", seekPoints: [] },
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