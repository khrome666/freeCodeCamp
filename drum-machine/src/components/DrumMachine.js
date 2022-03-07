import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

export default function DrumMachine() {
    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    drumPadArray = keys.map(key => <DrumPad padKey={key} />);
    return (
        <>
            <Display />
            {drumPadArray}
        </>
    );
}