class Bala {
 constructor(positionY){

    this.node = document.createElement("img")
    this.node.src = "./img/bala.png"

    gameBoxNode.append(this.node)

    this.x = 30;
    this.y = positionY;
    this.w = 80;
    this.h = 60;

    this.node.style.position ="absolute"
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

    this.movementSpeed= 6;


 }

 fireMovement(){
   this.x += this.movementSpeed
        this.node.style.left = `${this.x}px`

 }

 


}