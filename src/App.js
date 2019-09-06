import React from 'react';
import './App.css';
import Drop from './Drop';

const suggestions = [
    'The Colour of Magic',
    'The Light Fantastic',
    'Equal Rites',
    'Mort',
    'Sourcery',
    'Wyrd Sisters',
    'Pyramids',
    'Guards! Guards!',
    'Eric',
    'Moving Pictures',
    'Reaper Man',
    'Witches Abroad',
    'Small Gods',
    'Lords and Ladies',
    'Men at Arms',
    'Soul Music',
    'Interesting Times',
    'Maskerade',
    'Feet of Clay',
    'Hogfather',
    'Jingo',
    'The Last Continent',
    'Carpe Jugulum',
    'The Fifth Elephant',
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Drop suggestions={suggestions} />
            </header>
        </div>
    );
}

export default App;
