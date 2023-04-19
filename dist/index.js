"use strict";
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const mobImage = new Image();
mobImage.src = "../assets/Vampire_Girl/Attack_1.png";
const spriteWidth = 150;
const spriteHeight = 150;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx!.fillRect(50,50,100,100);
    ctx.drawImage(mobImage, 0 * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate();
