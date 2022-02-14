// import React from "react";
// import ReactDOM from "react-dom";

function MyReasons() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's cool</li>
                <li>Easy to learn (not!)</li>
                <li>Did I say cool?</li>
                <li>Money!!!</li>
            </ol>
            <footer>
                &copy; 2022 Almeida development. All rights reserved.
            </footer>
        </div>
    );
}

ReactDOM.render(<MyReasons />, document.getElementById("root"));
