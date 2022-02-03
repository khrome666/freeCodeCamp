'use strict';

const quotes = [{
  text: "The purpose of our lives is to be happy.",
  author: "Dalai Lama"
}, {
  text: "Life is what happens when you're busy making other plans.",
  author: "John Lennon"
}, {
  text: "Get busy living or get busy dying.",
  author: "Stephen King"
}, {
  text: "You only live once, but if you do it right, once is enough.",
  author: "Mae West"
}];

const Quote = props => {
  return React.createElement("h1", {
    id: "text"
  }, props.quote.text);
};

const Author = props => {
  return React.createElement("p", {
    id: "author"
  }, props.quote.author);
};

const NewQuote = props => {
  return React.createElement("p", null, React.createElement("a", {
    id: "new-quote",
    href: "#",
    onClick: props.callback
  }, "New Quote"));
};

const TweetQuote = () => {
  return React.createElement("p", null, React.createElement("a", {
    id: "tweet-quote",
    href: "#"
  }, "Tweet Quote"));
};

const QuoteBox = () => {
  const randomQuote = () => quotes[Math.floor(Math.random() * 4)];

  const [activeQuote, setQuote] = React.useState(randomQuote());
  return React.createElement("div", {
    id: "quote-box"
  }, React.createElement(Quote, {
    quote: activeQuote
  }), React.createElement(Author, {
    quote: activeQuote
  }), React.createElement(NewQuote, {
    callback: setQuote
  }), React.createElement(TweetQuote, null));
};

const domContainer = document.querySelector('#main-box');
ReactDOM.render(React.createElement(QuoteBox), domContainer);
