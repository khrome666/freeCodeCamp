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
        return e(
            "div",
            {
                id: "quote"
            },
            e(
                "h1",
                {
                    id: "text"
                },
                this.props.text
            ),
            "       ",
            e(
                "p",
                {
                    id: "author"
                },
                this.props.author
            ),
            e(
                "p",
                null,
                e(
                    "a",
                    {
                        href: "#",
                        id: "new-quote",
                        onClick: this.props.getNewQuote
                    },
                    "New Quote"
                )
            ),
            e(
                "p",
                null,
                e(
                    "a",
                    {
                        href: "#",
                        id: "tweet-quote"
                    },
                    "Tweet Quote"
                )
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
            randomQuote: Math.floor(Math.random() * 4),
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
                    author: "Stephen King"
                },
                {
                    text: "You only live once, but if you do it right, once is enough.",
                    author: "Mae West"
                }
            ]
        };
    }

    newQuote()
    {
        this.setState(
            {
                randomQuote: Math.floor(Math.random() * 4)
            }
        );
    }

    render()
    {
        return e(
            "div",
            {
                id: "quote-box"
            },
            e(Quote, {
                text: this.state.quotes[this.state.randomQuote].text,
                author: this.state.quotes[this.state.randomQuote].author,
                getNewQuote: this.newQuote
            })
        );
    }
}

const domContainer = document.querySelector('#main-box');
ReactDOM.render(e(QuoteBox), domContainer);
