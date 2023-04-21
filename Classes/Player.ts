import IPosition from "../Interfaces/IPosition.js";
import { canvas, ctx } from "./Canvas.js";
import Sprite, { ISpriteProps } from "./Sprite.js";

export default class Player extends Sprite {
    velocity: IPosition

    constructor({imageSrc}: ISpriteProps) {
        super({imageSrc, position:{x: canvas.width / 2,y: canvas.height / 2}});
        this.velocity = {x: 0, y: 0}
    }
}