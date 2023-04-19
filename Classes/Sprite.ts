import IPosition from "../Interfaces/IPosition.js";
import { ctx } from "./Canvas.js";

export interface ISpriteProps {
    position: IPosition,
    imageSrc: string
}

export default class Sprite {
    position: IPosition;
    image: HTMLImageElement;
    loaded: boolean = false;
    width: number = 0
    height: number = 0
    constructor({position, imageSrc}: ISpriteProps) {
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width
            this.height = this.image.height
        }
        this.image.src = imageSrc;
    }
    
    public draw() {
        if(!this.loaded) return;
        ctx!.drawImage(this.image, this.position.x, this.position.y)
    }
}