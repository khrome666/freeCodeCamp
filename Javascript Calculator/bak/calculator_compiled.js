"use strict";

// Definição
function Key(props)
{
    return React.createElement("button", {
        id: `${props.id}`,
        className: `btn btn-${props.color} w-100 h-100`,
        onClick: () => console.log(props.op)
    }, props.op);
}


function Display(props)
{
    return React.createElement("p", {
        id: `${props.id}`,
        className: "bg-dark text-warning text-end display-4 p-2"
    }, props.value);
}


function Calculator(props)
{
    const storeDisplayValue = op => setDisplayValue(op);
    const [displayValue, setDisplayValue] = React.useState("0");

    return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        colSpan: "4"
    }, React.createElement(Display, {
        id: "display",
        value: props.displayValue
    }))), React.createElement("tr", null, React.createElement("td", {
        colSpan: "2"
    }, React.createElement(Key, {
        id: "clear",
        color: "danger",
        op: "AC"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "divide",
        color: "primary",
        op: "/"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "multiply",
        color: "primary",
        op: "*"
    }))), React.createElement("tr", null, React.createElement("td", null, React.createElement(Key, {
        id: "seven",
        color: "secondary",
        op: "7"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "eight",
        color: "secondary",
        op: "8"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "nine",
        color: "secondary",
        op: "9"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "subtract",
        color: "primary",
        op: "-"
    }))), React.createElement("tr", null, React.createElement("td", null, React.createElement(Key, {
        id: "four",
        color: "secondary",
        op: "4"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "five",
        color: "secondary",
        op: "5"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "six",
        color: "secondary",
        op: "6"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "add",
        color: "primary",
        op: "+"
    }))), React.createElement("tr", {
        className: "h-100"
    }, React.createElement("td", null, React.createElement(Key, {
        id: "one",
        color: "secondary",
        op: "1"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "two",
        color: "secondary",
        op: "2"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "three",
        color: "secondary",
        op: "3"
    })), React.createElement("td", {
        rowSpan: "2",
        className: "h-100"
    }, React.createElement(Key, {
        id: "equals",
        color: "success",
        op: "="
    }))), React.createElement("tr", null, React.createElement("td", {
        colSpan: "2"
    }, React.createElement(Key, {
        id: "zero",
        color: "secondary",
        op: "0"
    })), React.createElement("td", null, React.createElement(Key, {
        id: "decimal",
        color: "secondary",
        op: "."
    }))));
}

;

// Visualização
let domContainer = document.querySelector('#calculator');
ReactDOM.render(React.createElement(Calculator), domContainer);
