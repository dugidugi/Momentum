const images = [ "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg" ];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const imgTag = document.createElement("img");
imgTag.src = `img/${selectedImage}`;

document.body.append(imgTag);
