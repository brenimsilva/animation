import { AnimationEnum } from "./Classes/AnimationEnum.js";
import { canvas, ctx } from "./Classes/Canvas.js";
import Player from "./Classes/Player.js";
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const mobImage = new Image();
mobImage.src = "../assets/Vampire_Girl/Attack_1.png";
const spriteWidth = 150;
const spriteHeight = 150;
const player = new Player({ position: { x: 0, y: 0 }, imageSrc: "../assets/Vampire_Girl/Idle.png" });
const fps = 10;
let idle = true;
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    spacebar: {
        pressed: false
    }
};
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx!.fillRect(50,50,100,100);
    // ctx!.drawImage(mobImage, 0*spriteWidth, 0, spriteWidth, spriteHeight, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // player.draw()
    player.update();
    player.setAnimationSprite(AnimationEnum.IDLE);
    if (keys.a.pressed) {
        player.setAnimationSprite(AnimationEnum.ATTACK);
    }
    if (keys.d.pressed) {
        player.setAnimationSprite(AnimationEnum.DEAD);
    }
    if (keys.spacebar.pressed) {
        player.setAnimationSprite(AnimationEnum.JUMP);
    }
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}
animate();
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "a":
            keys.a.pressed = true;
            break;
        case " ":
            keys.spacebar.pressed = true;
            break;
        case "d":
            keys.d.pressed = true;
            break;
    }
});
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "a":
            keys.a.pressed = false;
            break;
        case " ":
            keys.spacebar.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
    }
});
