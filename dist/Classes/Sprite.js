import { ctx } from "./Canvas.js";
export default class Sprite {
    constructor({ position, imageSrc }) {
        this.loaded = false;
        this.sprite_width = 128;
        this.sprite_height = 200;
        this.height = 0;
        this.width = 0;
        this.msw = 1;
        this.msh = 0;
        this.scale = 2;
        this.maxFrames = 0;
        this.image = new Image();
        this.position = position;
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.sprite_width;
            this.height = this.sprite_height;
            this.position = { x: position.x - this.width * this.scale / 2, y: position.y - this.height * this.scale / 2 };
        };
        this.image.src = imageSrc;
    }
    draw() {
        if (!this.loaded)
            return;
        //  ctx!.fillStyle = "blue";
        //  ctx!.fillRect(this.position.x, this.position.y, this.sprite_width, this.sprite_height)
        ctx.drawImage(this.image, this.msw * this.sprite_width, this.msh * this.sprite_height, this.sprite_width, this.sprite_height, this.position.x, this.position.y, this.width * this.scale, this.height * this.scale);
    }
    update() {
        if (this.msw < this.maxFrames) {
            this.msw++;
            this.draw();
        }
        else {
            this.msw = 0;
            this.draw();
        }
    }
    setAnimationSprite(animationType) {
        switch (animationType) {
            case "ATTACK":
                this.image.src = "../assets/Vampire_Girl/Attack_1.png";
                this.maxFrames = 4;
                break;
            case "IDLE":
                this.image.src = "../assets/Vampire_Girl/Idle.png";
                this.maxFrames = 4;
                break;
            case "JUMP":
                this.image.src = "../assets/Vampire_Girl/Jump.png";
                this.maxFrames = 5;
                break;
            case "DEAD":
                this.image.src = "../assets/Vampire_Girl/Dead.png";
                this.maxFrames = 9;
                break;
        }
    }
}
