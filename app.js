/* Step N.01 Find the element
    Step N.02 Listen the event
    Step N.03 React the event */


const title = document.querySelector("#h1container h1");

function clickTitleEvent(){
    title.classList.toggle("clicked")
}

title.addEventListener("click", clickTitleEvent)