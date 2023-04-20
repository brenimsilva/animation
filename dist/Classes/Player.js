import { ctx } from "./Canvas.js";
import Sprite from "./Sprite.js";
export default class Player extends Sprite {
    constructor({ imageSrc }) {
        super({ imageSrc, position: { x: 250, y: 200 } });
        this.velocity = { x: 0, y: 0 };
    }
    update() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.position.x += this.velocity.x;
    }
}
