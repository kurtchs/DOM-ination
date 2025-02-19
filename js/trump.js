class Trump {
 constructor(){

    this.node = document.createElement("img")
    this.node.src = "./img/trump.png"

    gameBoxNode.append(this.node)

    this.x = 30;
    this.y = 50;
    this.w = 180;
    this.h = 120;

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