const quotes = [
    {quote : "자신감을 위한 것",
    author : "DS"
    },
    {quote : "꿈은 없구요 놀고 싶습니다",
    author : "G park"
    },
    {quote : "4",
    author : "dd4"
    },
    {quote : "5",
    author : "dd5"
    }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

