import { canvas } from "./Canvas.js";
import Sprite from "./Sprite.js";
export default class Player extends Sprite {
    constructor({ imageSrc }) {
        super({ imageSrc, position: { x: canvas.width / 2, y: canvas.height / 2 } });
        this.velocity = { x: 0, y: 0 };
    }
}
