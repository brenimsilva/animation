import { ctx } from "./Canvas.js";
export default class Sprite {
    constructor({ position, imageSrc }) {
        this.loaded = false;
        this.width = 0;
        this.height = 0;
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width;
            this.height = this.image.height;
        };
        this.image.src = imageSrc;
    }
    draw() {
        if (!this.loaded)
            return;
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}
