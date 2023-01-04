const quotes = [
    {
        quote: "승리는 가장 끈기있는 자에게 돌아간다.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "단 1분의 성공이 몇 년의 실패를 보상한다.",
        author: "Robert Browning",
    },
    {
        quote: "성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다.",
        author: "Fritz Kunkel",
    },
    {
        quote: "미래의 가장 좋은 점은 한 번에 하루씩 온다는 것이다.",
        author: "Abraham Lincoln",
    },
    {
        quote: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
        author: "Albert Einstein",
    },
    {
        quote: "이 세상에 열정없이 이루어진 위대한 것은 없다.",
        author: "Georg Wilhelm",
    },
    {
        quote: "자신의 능력을 믿어야 한다. 그리고 끝까지 굳세게 밀고 나가라.",
        author: "Rosalynn Carter",
    },
    {
        quote: "흠집 없는 조약돌보다는 흠집 있는 다이아몬드가 낫다.",
        author: "Confucius",
    },
    {
        quote: "만족은 결과가 아니라 과정에서 온다.",
        author: "James Dean",
    },
    {
        quote: "누구나 재능은 있다. 드문 것은 그 재능이 이끄는 암흑 속으로 따라 들어갈 용기다.",
        author: "Erica Jong",
    }
]

const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];

const Quote = document.querySelector("#quotes span:first-child");
const Author = document.querySelector("#quotes span:last-child");

Quote.innerText = randomQuotes.quote;
Author.innerText = randomQuotes.author;
