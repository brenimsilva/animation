import { canvas, ctx } from "./Classes/Canvas.js";
import Player from "./Classes/Player.js";
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const mobImage = new Image();
mobImage.src = "../assets/Vampire_Girl/Attack_1.png";
const spriteWidth = 150;
const spriteHeight = 150;
const player = new Player({ position: { x: 0, y: 0 }, imageSrc: "../assets/Vampire_Girl/Attack_1.png" });
const fps = 25;
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx!.fillRect(50,50,100,100);
    // ctx!.drawImage(mobImage, 0*spriteWidth, 0, spriteWidth, spriteHeight, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.draw();
    player.update();
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}
animate();
