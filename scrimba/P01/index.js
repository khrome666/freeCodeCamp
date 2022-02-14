// import React from "react";
// import ReactDOM from "react-dom";

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="./react-logo.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <small>&copy; 2022 Almeida development. All rights reserved.</small>
        </footer>
    );
}

function MainContent() {
    return (
        <div>
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
