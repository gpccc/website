import React from 'react';
import ReactDOM from 'react-dom';

import './styles/site.css';

import SermonCard from './components/sermon-card';

function App() {
    return (
        <div>
        <SermonCard sermonYouTubeUrl="https://www.youtube.com/embed/uqmaE9JKGtc" topic="Ezra 3: First Comes Sacrifice" pastor="Pastor Larry Lee" date="September 27, 2020" />

        {/*
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uqmaE9JKGtc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AYadEf1YjVk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AlrtccfApe8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        */}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));