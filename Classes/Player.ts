import IPosition from "../Interfaces/IPosition.js";
import { ctx } from "./Canvas.js";
import Sprite, { ISpriteProps } from "./Sprite.js";

export default class Player extends Sprite {
    velocity: IPosition

    constructor({imageSrc}: ISpriteProps) {
        super({imageSrc, position:{x: 250,y: 200}});
        this.velocity = {x: 0, y: 0}
    }

    public update() {
        ctx!.fillStyle = "blue";
        ctx!.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x
    }
}