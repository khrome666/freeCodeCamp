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
    return /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: "4"
    }, /*#__PURE__*/React.createElement(Display, {
        id: "display",
        value: displayValue
    }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: "2"
    }, /*#__PURE__*/React.createElement(Key, {
        id: "clear",
        color: "danger",
        op: "AC"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "divide",
        color: "primary",
        op: "/"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "multiply",
        color: "primary",
        op: "*"
    }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "seven",
        color: "secondary",
        op: "7",
        onClick: () => storeDisplayValue("7")
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "eight",
        color: "secondary",
        op: "8"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "nine",
        color: "secondary",
        op: "9"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "subtract",
        color: "primary",
        op: "-"
    }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "four",
        color: "secondary",
        op: "4"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "five",
        color: "secondary",
        op: "5"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "six",
        color: "secondary",
        op: "6"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "add",
        color: "primary",
        op: "+"
    }))), /*#__PURE__*/React.createElement("tr", {
        className: "h-100"
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "one",
        color: "secondary",
        op: "1"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "two",
        color: "secondary",
        op: "2"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "three",
        color: "secondary",
        op: "3"
    })), /*#__PURE__*/React.createElement("td", {
        rowSpan: "2",
        className: "h-100"
    }, /*#__PURE__*/React.createElement(Key, {
        id: "equals",
        color: "success",
        op: "="
    }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: "2"
    }, /*#__PURE__*/React.createElement(Key, {
        id: "zero",
        color: "secondary",
        op: "0"
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Key, {
        id: "decimal",
        color: "secondary",
        op: "."
    }))));
}

;

// Visualização
let domContainer = document.querySelector('#calculator');
ReactDOM.render(React.createElement(Calculator), domContainer);
