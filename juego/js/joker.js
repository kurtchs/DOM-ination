class Joker {
    constructor(){

        this.node = document.createElement("img")
        this.node.src = "/juego/img/mexican-joker.png"
        gameBoxNode.append(this.node)


        this.x = gameBoxNode.offsetWidth;
        this.y = 50;
        this.w = 100;
        this.h = 90;

        this.node.style.position ="absolute"
        this.node.style.left = `${this.x}px`
        this.node.style.top = `${this.y}px`
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`

        this.movementSpeed = 5 

    }

    movement() {
        this.x -= this.movementSpeed
        this.node.style.left = `${this.x}px`

    }


}