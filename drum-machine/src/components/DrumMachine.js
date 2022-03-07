import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

export default function DrumMachine() {
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    const drumPadArray = keys.map(key => <DrumPad key={key} padKey={key} />);

    return (
        <div id='drum-machine'>
            <Display />
            {drumPadArray}
        </div>
    );
}