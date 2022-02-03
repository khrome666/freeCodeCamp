"use strict";

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
        author: "Stephen King"
    }, 
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
];

const Quote = props =>
{
    return React.createElement("h1", {
        id: "text",
        className: "card-title display-3"
    }, `"${props.quote.text}"`);
};

const Author = props =>
{
    return React.createElement("p", {
        className: "card-text text-muted text-end mb-3",
        id: "author"
    },React.createElement("em", null, "-- " + props.quote.author));
};

const TweetQuote = props =>
{
    return React.createElement("p", null, React.createElement("a", {
        id: "tweet-quote",
        className: "btn btn-outline-primary float-start",
        role: "button",
        href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + props.quote.text + '"'),
        target: "_blank"
    }, "Tweet Quote"));
};

const NewQuote = props =>
{
    return React.createElement("p", null, React.createElement("a", {
        id: "new-quote",
        className: "btn btn-primary float-end",
        role: "button",
        href: "#",
        onClick: props.callback
    }, "New Quote"));
};

const QuoteBox = () =>
{
    const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
    const callbackQuote = () => setQuote(randomQuote());
    const [activeQuote, setQuote] = React.useState(randomQuote());

    const elQuote = React.createElement(Quote, {quote: activeQuote});
    const elAuthor = React.createElement(Author, {quote: activeQuote});
    const elNewQuote = React.createElement(NewQuote, {callback: callbackQuote});
    const elTweetQuote = React.createElement(TweetQuote, {quote: activeQuote});

    return (
        React.createElement("div", {
                className: "col"
            },
            React.createElement("div", {
                    id: "quote-box",
                    className: "card mt-4 shadow"
                }, 
                React.createElement("div", {
                    className: "card-body"
                },
                    elQuote, 
                    elAuthor,
                    elTweetQuote,
                    elNewQuote
                )
            )
        )
    );
};

const domContainer = document.querySelector('#main-box');
ReactDOM.render(React.createElement(QuoteBox), domContainer);
