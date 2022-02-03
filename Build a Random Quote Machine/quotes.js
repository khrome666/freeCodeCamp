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
  return /*#__PURE__*/React.createElement("h1", {
    id: "text"
  }, props.quote.text);
};

const Author = props => {
  return /*#__PURE__*/React.createElement("p", {
    id: "author"
  }, props.quote.author);
};

const NewQuote = () => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    id: "new-quote",
    href: "#"
  }, "New Quote"));
};

const TweetQuote = () => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    id: "tweet-quote",
    href: "#"
  }, "Tweet Quote"));
};

const QuoteBox = () => {
  const randomQuote = () => quotes[Math.floor(Math.random() * 4)];

  const [activeQuote, setQuote] = React.useState(randomQuote());
  return /*#__PURE__*/React.createElement("div", {
    id: "quote-box"
  }, /*#__PURE__*/React.createElement(Quote, {
    quote: activeQuote
  }), /*#__PURE__*/React.createElement(Author, {
    quote: activeQuote
  }), /*#__PURE__*/React.createElement(NewQuote, null), /*#__PURE__*/React.createElement(TweetQuote, null));
};

const domContainer = document.querySelector('#main-box');
ReactDOM.render(React.createElement(QuoteBox), domContainer);

