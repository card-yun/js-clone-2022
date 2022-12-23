/*js가 html을 가져올 수 있다.
app.js를 import했기 때문에 document(검색창)가 존재할 수 있다.
--내 html과 app.js가 연결 됨--
browser가 우리가 document 에 접근할 수 있게 해준다.*/
//ID랑 Class로 가져오기: getElementById/ClassNmae
const innerBox = document.getElementById("inputBox");
console.dir(innerBox);

const borderBox = document.getElementById("submitBox");
console.dir(borderBox);

//CSS처럼 Selector
const title = document.querySelector(".hello h1:first-child");
console.log(title);

title.style.color="blue";

const test = document.querySelector("#abcd");
console.log(test);