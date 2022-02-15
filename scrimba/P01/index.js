// import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header.js"

function Footer() {
    return (
        <footer className="footer">
            <small>&copy; 2022 Almeida development. All rights reserved.</small>
        </footer>
    );
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's cool</li>
                <li>Easy to learn (not!)</li>
                <li>Did I say cool?</li>
                <li>Money!!!</li>
            </ol>
        </div>
    );
}

function MyReasons() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<MyReasons />, document.getElementById("root"));
