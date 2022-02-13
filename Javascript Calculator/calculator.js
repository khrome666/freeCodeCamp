function Key(props) {
    return (
        <button id={`${props.id}`} className={`btn btn-${props.color} w-100 h-100`} onClick={props.callback}>{props.op}</button>
    );
}

function Display(props) {
    return (
        <p id={`${props.id}`} className="bg-dark text-warning text-end display-4 p-2">{props.value}</p>
    );
}

function Calculator() {
    function updateValues(op) {
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
        const mathOps = ["+", "-", "*", "/"]
        const resultOp = ["="];

        let currentInputValue = inputValue;
        let currentDisplayValue = displayValue;

        if (numbers.indexOf(op) > -1 || op === ".") {
            if (currentInputValue === "0") {
                if (op === ".") {
                    currentInputValue += op;
                }
                else if (op !== "0") {
                    currentInputValue = op;
                }
            }
            else {
                currentInputValue += op;
            }
            currentDisplayValue = currentInputValue;
        }

        if (mathOps.indexOf(op) > -1) {
            currentInputValue += op;
        }
        setInputValue(currentInputValue);
        setDisplayValue(currentDisplayValue);
    }

    const [inputValue, setInputValue] = React.useState("0");
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
                <td><Key id="seven" color="secondary" op="7" callback={() => updateValues("7")} /></td>
                <td><Key id="eight" color="secondary" op="8" callback={() => updateValues("8")} /></td>
                <td><Key id="nine" color="secondary" op="9" callback={() => updateValues("9")} /></td>
                <td><Key id="subtract" color="primary" op="-" /></td>
            </tr>
            <tr>
                <td><Key id="four" color="secondary" op="4" callback={() => updateValues("4")} /></td>
                <td><Key id="five" color="secondary" op="5" callback={() => updateValues("5")} /></td>
                <td><Key id="six" color="secondary" op="6" callback={() => updateValues("6")} /></td>
                <td><Key id="add" color="primary" op="+" callback={() => updateValues("+")} /></td>
            </tr>
            <tr className="h-100">
                <td><Key id="one" color="secondary" op="1" callback={() => updateValues("1")} /></td>
                <td><Key id="two" color="secondary" op="2" callback={() => updateValues("2")} /></td>
                <td><Key id="three" color="secondary" op="3" callback={() => updateValues("3")} /></td>
                <td rowSpan="2" className="h-100"><Key id="equals" color="success" op="=" /></td>
            </tr>
            <tr>
                <td colSpan="2"><Key id="zero" color="secondary" op="0" callback={() => updateValues("0")} /></td>
                <td><Key id="decimal" color="secondary" op="." callback={() => updateValues(".")} /></td>
            </tr>
        </tbody>
    );
};

// Visualização
let domContainer = document.querySelector('#calculator');
ReactDOM.render(React.createElement(Calculator), domContainer);
