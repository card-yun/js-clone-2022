const bgimgsArray = ["01splash.jpg", "02splash.jpg", "03splash.jpg", "04splash.jpg", "05splash.jpg", "06splash.jpg"];
const randomBgimgs = bgimgsArray[Math.floor(Math.random()*bgimgsArray.length)];
const bgimg = document.createElement("img"); // Ctrl + C

bgimg.src = `bgimages/${randomBgimgs}`;

document.body.appendChild(bgimg); // Ctrl + V (위치 지정)