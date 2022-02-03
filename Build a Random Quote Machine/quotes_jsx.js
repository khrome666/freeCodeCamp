'use strict';

const quotes = [
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Get busy living or get busy dying.",
        author:  "Stephen King"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
];

const Quote = (props) => {
    return (
        <h1 id="text">
            {props.quote.text}
        </h1>
    );
}

const Author = (props) => {
    return (
        <p id="author">
            {props.quote.author}
        </p>
    );
}

const NewQuote = () => {
    return (
        <p>
            <a id="new-quote" href="#">New Quote</a>
        </p>
    );
}

const TweetQuote = () => {
    return (
        <p>
            <a id="tweet-quote" href="#">Tweet Quote</a>
        </p>
    );
}

const QuoteBox = () => {
    const randomQuote = () => quotes[Math.floor(Math.random() * 4)];

    const [activeQuote, setQuote] = React.useState(randomQuote());

    return (
        <div id="quote-box">
            <Quote quote={activeQuote}/>
        </div>
    );
}

const domContainer = document.querySelector('#main-box');
ReactDOM.render(React.createElement(QuoteBox), domContainer);
