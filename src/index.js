import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SeekPointType from './constants/seek-point-type';

import ServiceCard from './components/service-card';

function App() {
    const services = [
        { youtubeVideoID: "gvSIj2PaVGM", topic: "Ezra 5: Rebuilding Resumes", pastor: "Pastor Jerry Lin", date: "2020-10-11T16:30:00Z", duration: "00:00:00", seekPoints: [] },
        { youtubeVideoID: "EWQ__H_85bE", topic: "Ezra 4: Rebuilding Opposed", pastor: "Pastor Larry Lee", date: "2020-10-04T16:30:00Z", duration: "01:25:45", seekPoints: [
            {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
            {time: "00:10:57", label: "Opening prayer", type: SeekPointType.PRAYER},
            {time: "00:12:35", label: "O Come to the Altar", type: SeekPointType.PRAISE_SONG},
            {time: "00:18:02", label: "Psalm 18:2-6, 16-17, 46, 49", type: SeekPointType.BIBLE_VERSE},
            {time: "00:19:20", label: "Rock of Ages (You will Stand)", type: SeekPointType.PRAISE_SONG},
            {time: "00:23:46", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
            {time: "00:28:54", label: "The Wonderful Cross", type: SeekPointType.PRAISE_SONG},
            {time: "00:34:17", label: "Congregational prayer", type: SeekPointType.PRAYER},
            {time: "00:36:01", label: "Communion", type: SeekPointType.COMMUNION},
            {time: "00:44:23", label: "Message", type: SeekPointType.MESSAGE},
            {time: "01:23:01", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
            {time: "01:24:45", label: "Benediction", type: SeekPointType.BENEDICTION},
        ]},
        { youtubeVideoID: "uqmaE9JKGtc", topic: "Ezra 3: First Comes Sacrifice", pastor: "Pastor Larry Lee", date: "2020-09-27T16:30:00Z", duration: "01:28:35", seekPoints: [
            {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
            {time: "00:10:36", label: "Opening prayer", type: SeekPointType.PRAYER},
            {time: "00:11:38", label: "O Praise the Name", type: SeekPointType.PRAISE_SONG},
            {time: "00:16:10", label: "Center", type: SeekPointType.PRAISE_SONG},
            {time: "00:21:08", label: "1 Samuel 2:1-10", type: SeekPointType.BIBLE_VERSE},
            {time: "00:24:18", label: "Gracefully Broken", type: SeekPointType.PRAISE_SONG},
            {time: "00:29:12", label: "Better", type: SeekPointType.PRAISE_SONG},
            {time: "00:33:04", label: "Congregational prayer and news", type: SeekPointType.PRAYER},
            {time: "00:42:06", label: "Message", type: SeekPointType.MESSAGE},
            {time: "01:17:32", label: "Forever", type: SeekPointType.PRAISE_SONG},
            {time: "01:22:17", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
            {time: "01:22:49", label: "Benediction", type: SeekPointType.BENEDICTION},
        ]},
        { youtubeVideoID: "GA94lEQkKo0", topic: "Exodus 4:10-17: Talent", pastor: "Pastor Steven Chin", date: "2020-09-20T16:30:00Z", duration: "01:23:41", seekPoints: [
            {time: "00:00:00", label: "Beginning", type: SeekPointType.BEGINNING},
            {time: "00:09:57", label: "Opening prayer", type: SeekPointType.PRAYER},
            {time: "00:11:04", label: "Who You Say I Am", type: SeekPointType.PRAISE_SONG},
            {time: "00:15:34", label: "Luke 23:32-43", type: SeekPointType.BIBLE_VERSE},
            {time: "00:17:26", label: "O Praise the Name", type: SeekPointType.PRAISE_SONG},
            {time: "00:22:18", label: "Better", type: SeekPointType.PRAISE_SONG},
            {time: "00:26:00", label: "Broken Vessels / Majesty", type: SeekPointType.PRAISE_SONG},
            {time: "00:32:17", label: "Congregational prayer", type: SeekPointType.PRAYER},
            {time: "00:35:58", label: "Message", type: SeekPointType.MESSAGE},
            {time: "01:10:12", label: "Missions at GPCCC", type: SeekPointType.ANNOUNCEMENTS},
            {time: "01:18:38", label: "Announcements", type: SeekPointType.ANNOUNCEMENTS},
            {time: "01:21:56", label: "Closing prayer", type: SeekPointType.PRAYER},
        ]},
        { youtubeVideoID: "Q5x9gZWP6tM", topic: "Ezra 2: The Remnant", pastor: "Pastor Jerry Lin", date: "2020-09-13T16:30:00Z", duration: "01:24:50", seekPoints: [] },
    ];

    return (
        <div>

        <ServiceCard services={services} />

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