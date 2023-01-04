const clock = document.querySelector("h2#clock");

function settingClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hour}:${minutes}:${seconds}`;
}
//  ms
settingClock();
setInterval(settingClock, 1000);
