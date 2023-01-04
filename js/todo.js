const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// toDos는 코드상에 존재하지만 내가 localStorage에 붙여넣기 한 것 뿐임.
// local storage는 toDos array(데이터베이스)를 '복사'해두는 곳이지, 데이터 베이스가 아님.
// 데이터베이스를 따로 배우면 됨.
let toDos = [];

//파생3 function
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//파생2 function
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    // array 다시 저장
    toDos = toDos.filter((element) => element.id !== parseInt(li.id));
    //localStorage 업데이트.
    saveToDos();
}

//파생1 function
function paintToDo(newToDoObj){
    const li = document.createElement("li"); // paint용. 보여주기식. 가짜임.
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo); // 색칠한걸 지웠지, toDos가 지워지는건 아니다.
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// main function //
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos(); // localStorage가 toDos로 저장됨.
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// ******* toDos === parsedToDos 왜 했는지 알아보기. *******