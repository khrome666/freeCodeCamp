"use strict";

// Definição
function Key(props)
{
    return React.createElement(
        "button",
        {
            className: `btn btn-${props.color} w-100 h-100`
        },
        props.op
    );
}

function Keyboard(props)
{
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            React.createElement(Key, {
                color: "secondary",
                op: "0"
            })
        ),
        React.createElement(
            "td",
            null,
            React.createElement(Key, {
                color: "secondary",
                op: "."
            })
        )
    );
}


// Visualização
let domContainer = document.querySelector('#pointkey');
ReactDOM.render(React.createElement(Keyboard), domContainer);
