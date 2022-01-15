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
        return /*#__PURE__*/ React.createElement(
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
        return /*#__PURE__*/ React.createElement(
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
        return /*#__PURE__*/ React.createElement(
            "p",
            null,
        /*#__PURE__*/ React.createElement(
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
        return /*#__PURE__*/ React.createElement(
            "p",
            {
                id: "new-quote"
            },
        /*#__PURE__*/ React.createElement(
                "a",
                {
                    href: "#"
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
            text: "This is a VERY made-up quote from...",
            author: "... The Author"
        };
    }

    render()
    {
        return /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "quote-box"
            },
        /*#__PURE__*/ React.createElement(Quote, {
                text: this.state.text
            }),
        /*#__PURE__*/ React.createElement(Author, {
                author: this.state.author
            }),
        /*#__PURE__*/ React.createElement(NewQuote, null),
        /*#__PURE__*/ React.createElement(TweetQuote, null)
        );
    }
}

const domContainer = document.querySelector('#main-box');
ReactDOM.render(e(QuoteBox), domContainer);
