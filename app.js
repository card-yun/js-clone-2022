alert("hellooo");

/* type */

const a = 3
const b = 45
let userName = "niiico"
/* variable */

console.log(a+b);
console.log("hello " + userName);

userName = "nicolas";
console.log("hi how are you, " + userName + "?");

let doesUserLogIn = false;
const amIFat = null;
let something;
console.log(doesUserLogIn, amIFat, something);
/* null 은 '비어있어요'를 의도적으로 표현하는 것 */

//array//
const toBuy = ["apple", "potato", "curry"];
toBuy.push("kimbop");

console.log(toBuy[3]);
console.log(toBuy);

//아래의 player는 object이다.//
const player = {
    name: "nico",
    score: 123,
    fat: false
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
//player는 object라서 요소 수정 및 추가할 수 있다.//
player.name = "korea Nicolas";
player.favoriteFood = "kimchi";
console.log(player);

player.score = player.score + 77;
console.log(player.score);