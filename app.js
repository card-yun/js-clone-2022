//정의 --- 불러오기
const title = document.querySelector(".title h1");

function whenClickTitle(){
    title.style.color="red";
}

function whenMouseEnter(){
    title.innerText="Mouse is on!";
}

function whenMouseLeave(){
    title.innerText="Mouse is gone...";
}

//h1 html element mdn --HTMLHeadingElement-Web APIs
title.addEventListener("click", whenClickTitle);
title.addEventListener("mouseenter", whenMouseEnter);
title.addEventListener("mouseleave", whenMouseLeave);

function handleResize(){
    document.body.style.backgroundColor="skyblue";
}

function handleWindowCopy(){
    alert("copied!");
}

function handleWindowOffline(){
    alert("Please connect the Wifi");
}

function handleWindowOnline(){
    alert("Wifi Connected!!");
}

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

