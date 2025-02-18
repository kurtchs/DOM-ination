class Alejandro {
    constructor(type, positionY){

        this.node = document.createElement("img")
        
        this.node.src = "/juego/img/alejandro.png"
       
        
        gameBoxNode.append(this.node)


        this.x = gameBoxNode.offsetWidth;
        this.y = positionY;
        this.w = 100;
        this.h = 90;

        this.node.style.position ="absolute"
        this.node.style.left = `${this.x}px`
        this.node.style.top = `${this.y}px`
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`

        this.movementSpeed = 4

        this.type = type

    }

    movement() {
        this.x -= this.movementSpeed
        this.node.style.left = `${this.x}px`

    }


}