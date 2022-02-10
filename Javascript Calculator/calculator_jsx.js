import React, { useState } from "react";

function Key(props)
{
    return (
        <button id={`${props.id}`} className={`btn btn-${props.color} w-100 h-100`} onClick={() => console.log(props.op)}>{props.op}</button>
    );
}

function Display(props)
{
    return (
        <p id={`${props.id}`} className="bg-dark text-warning text-end display-4 p-2">{props.Value}</p>
    );
}

function Calculator(props)
{
    const storeDisplayValue = (op) => setDisplayValue(op);
    const [displayValue, setDisplayValue] = React.useState("0");

    return (
        <tbody>
            <tr>
                <td colSpan="4">
                    <Display id="display" value={displayValue} />
                </td>
            </tr>
            <tr>
                <td colSpan="2"><Key id="clear" color="danger" op="AC" /></td>
                <td><Key id="divide" color="primary" op="/" /></td>
                <td><Key id="multiply" color="primary" op="*" /></td>
            </tr>
            <tr>
                <td><Key id="seven" color="secondary" op="7" onClick={() => storeDisplayValue("7")} /></td>
                <td><Key id="eight" color="secondary" op="8" /></td>
                <td><Key id="nine" color="secondary" op="9" /></td>
                <td><Key id="subtract" color="primary" op="-" /></td>
            </tr>
            <tr>
                <td><Key id="four" color="secondary" op="4" /></td>
                <td><Key id="five" color="secondary" op="5" /></td>
                <td><Key id="six" color="secondary" op="6" /></td>
                <td><Key id="add" color="primary" op="+" /></td>
            </tr>
            <tr className="h-100">
                <td><Key id="one" color="secondary" op="1" /></td>
                <td><Key id="two" color="secondary" op="2" /></td>
                <td><Key id="three" color="secondary" op="3" /></td>
                <td rowSpan="2" className="h-100"><Key id="equals" color="success" op="=" /></td>
            </tr>
            <tr>
                <td colSpan="2"><Key id="zero" color="secondary" op="0" /></td>
                <td><Key id="decimal" color="secondary" op="." /></td>
            </tr>
        </tbody>
    );
};

