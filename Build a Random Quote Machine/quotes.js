'use strict';

const e = React.createElement;

class Quote extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return React.createElement(
            "h1",
            {
                id: "text"
            },
            this.props.text
        );
    }
}

class Author extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return React.createElement(
            "p",
            {
                id: "author"
            },
            this.props.author
        );
    }
}

class NewQuote extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                {
                    id: "new-quote",
                    href: "#"
                },
                "New Quote"
            )
        );
    }
}

class TweetQuote extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return React.createElement(
            "p",
            null,
            React.createElement(
                "a",
                {
                    id: "tweet-quote",
                    href: "https://twitter.com/intent/tweet",
                    target: "_blank"
                },
                "Tweet Quote"
            )
        );
    }
}

class QuoteBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quotes: [
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
            ]
        };
    }

    render()
    {
        let randomQuote = Math.floor(Math.random() * 4);
        console.log(randomQuote);

        return React.createElement(
            "div",
            {
                id: "quote-box"
            },
        React.createElement(Quote, {
                text: this.state.quotes[randomQuote].text
            }),
        React.createElement(Author, {
                author: this.state.quotes[randomQuote].author
            }),
        React.createElement(NewQuote, null),
        React.createElement(TweetQuote, null)
        );
    }
}

const domContainer = document.querySelector('#main-box');
ReactDOM.render(e(QuoteBox), domContainer);
