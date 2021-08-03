const quotes = [
    {quote : "목표는 달성하기 위한 게 아니라 스스로의 자존감을 위한 것이다",
    author : "DS"
    },
    {quote : "꿈은 없구요 놀고 싶습니다",
    author : "G park"
    },
    {quote : "마주하면 별거 아니지만 피하면 피할수록 두려움이 된다. ",
    author : "DG"
    },
    {quote : "늦었다고 생각할 때가 너무 늦었다.",
    author : "박명수"
    }
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

