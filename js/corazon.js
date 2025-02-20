class Corazon {
 constructor(){

    this.node = document.createElement("img")
    this.node.src = "./img/corazon.png"

    gameBoxNode.append(this.node)

    this.x = 100;
    this.y = 5;
    this.w = 30;
    this.h = 30;

    this.node.style.position ="absolute"
    this.node.style.left = `${this.x}px`
    this.node.style.top = `${this.y}px`
    this.node.style.width = `${this.w}px`
    this.node.style.height = `${this.h}px`

 }
}