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
    sprite_width: number = 128
    sprite_height: number = 200
    height: number = 0;
    width: number = 0;
    msw: number = 1;
    msh: number = 0;
    scale: number = 2;

    constructor({position, imageSrc}: ISpriteProps) {
        this.image = new Image();
        this.position = position;
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.sprite_width
            this.height = this.sprite_height
            this.position = {x: position.x - this.width * this.scale/2, y: position.y - this.height * this.scale/2};
        }
        this.image.src = imageSrc;
    }
    
    public draw() {
        if(!this.loaded) return;
        //  ctx!.fillStyle = "blue";
        //  ctx!.fillRect(this.position.x, this.position.y, this.sprite_width, this.sprite_height)

        ctx!.drawImage(
            this.image, 
            this.msw * this.sprite_width, 
            this.msh * this.sprite_height, 
            this.sprite_width,
            this.sprite_height,
            this.position.x, 
            this.position.y, 
            this.width * this.scale, 
            this.height * this.scale
            )
    }

    update() {
        if (this.msw < 4) this.msw++
        else this.msw = 0;
    }
}