export default class SpriteLoader {
    img1: HTMLImageElement;
    img2: HTMLImageElement;
    img3: HTMLImageElement;

    constructor() {
        this.img2 = new Image()
        this.img1 = new Image()
        this.img3 = new Image()

        this.img1.src = "./assets/Vampire_Girl/Attack_1.png"
        this.img2.src = "./assets/Vampire_Girl/Idle.png"
        this.img3.src = "./assets/Vampire_Girl/Dead.png"

        // this.img1.width = 0
        // this.img2.width = 0
        // this.img3.width = 0;
        // document.body.appendChild(this.img1)
        // document.body.appendChild(this.img2)
        // document.body.appendChild(this.img3)

    }
}