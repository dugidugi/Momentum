const images = [ "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg" ];

const selectedImage = images[Math.floor(Math.random() * images.length)];


// ////니꼬버전/////
// const imgTag = document.createElement("img");
// imgTag.src = `img/${selectedImage}`;
// document.body.append(imgTag);


// 꽉찬 내 버전////
const body = document.body;
body.style.backgroundImage = `url(img/${selectedImage})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";

