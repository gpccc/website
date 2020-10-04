import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SermonCard from './components/sermon-card';

function App() {
    return (
        <div>
        <SermonCard sermonYouTubeUrl="https://www.youtube.com/embed/uqmaE9JKGtc" topic="Ezra 3: First Comes Sacrifice" pastor="Pastor Larry Lee" date="September 27, 2020" />

        {/*
        <SermonCard sermonYouTubeUrl="https://www.youtube.com/embed/GA94lEQkKo0" topic="Exodus 4:10-17: Talent" pastor="Pastor Steven Chin" date="September 20, 2020" />
        <SermonCard sermonYouTubeUrl="https://www.youtube.com/embed/Q5x9gZWP6tM" topic="Ezra 2: The Remnant" pastor="Pastor Jerry Lin" date="September 13, 2020" />
        <SermonCard sermonYouTubeUrl="https://www.youtube.com/embed/7sqGqrruW6w" topic="Ezra 1: Return to Rebuild" pastor="Pastor Larry Lee" date="September 6, 2020" />
        

        <iframe width="560" height="315" src="https://www.youtube.com/embed/AYadEf1YjVk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        https://youtu.be/R0ikzK-juhI
        https://youtu.be/uOjAL6YPG3U
        https://youtu.be/0m2rEJ8KI64

        <iframe width="560" height="315" src="https://www.youtube.com/embed/AlrtccfApe8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        9/20/2020 missing - joint service with Mandarin
        https://youtu.be/aEijmDl2Qjg
        9/6/2020 missing - joint service with Mandarin
        */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));