class Bala {
 constructor(positionY){

    this.node = document.createElement("img")
    this.node.src = "/juego/img/bala.png"

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

    this.jump= 50;


 }
//  objectLimits (){
//     if((this.y + this.h) <= gameBoxNode.offsetHeight){
//         this.y -= this.jump
//         this.node.style.top = `${this.y}px`

//     }
//  }

 jumpDown(){
    if((this.y + this.h) <= gameBoxNode.offsetHeight){
        this.y += this.jump
        this.node.style.top = `${this.y}px`
    }

 }
 jumpUp(){
    if(this.y >= 0 ){
        this.y -= this.jump
        this.node.style.top = `${this.y}px`
    }

 }



}