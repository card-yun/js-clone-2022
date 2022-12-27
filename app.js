const logInForm = document.querySelector("#logInForm")
const logInInput = document.querySelector("#logInForm input:first-child")

const greeting = document.querySelector("h1")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "storage";

function handleLogInSubmit(event){
    event.preventDefault()
    logInForm.classList.add(HIDDEN_CLASSNAME);
    const username = logInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    appearUsername(username);
}

function appearUsername(argument){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${argument}` ;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    logInForm.classList.remove(HIDDEN_CLASSNAME);
    logInForm.addEventListener("submit", handleLogInSubmit);
} else {
    appearUsername(savedUsername);
}