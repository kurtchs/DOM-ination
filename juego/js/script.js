// pantallas
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over")

// botones
const startBtnNode = document.querySelector("#start-btn")
const restartBtnNode = document.querySelector("#restart-btn")


// game box
const gameBoxNode = document.querySelector("#game-box")

// Variables Globales
let trumpObj = null

let jokerArr = []
let alejandroArr = []
let balaArr = []
let gameIntervalId = null
let jokerSpawnIntervalId = null

// let positionY = trumpObj.y
//Funciones
function startGame(){

    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    trumpObj = new Trump()
    balaObj = new Bala(positionY)
    balaArr.push(balaArr)



    

    gameIntervalId = setInterval (() => {
        gameLoop()

    },Math.round(1000/60))

   jokerSpawnIntervalId = setInterval(() => {
        jokerSpawn()
    }, 2000)

    alejandroSpawnIntervalId = setInterval(() => {
        alejandroSpawn()
    }, 2200)

}

function gameLoop(){

jokerArr.forEach((eachJoker) => {
    eachJoker.movement()
})

alejandroArr.forEach((eachAlejandro) => {
    eachAlejandro.movement()
})

jokerDespawn()
colision()
alejandroDespawn()

}

function jokerSpawn(){
    

randomPosition =Math.floor(Math.random() * 500)

let jokerObj1 = new Joker("arriba", randomPosition)
jokerArr.push(jokerObj1)
// let alejandroObj = new Joker("centroA", randomPosition)
// jokerArr.push(alejandroObj)
// // let jokerObj3 = new Joker("centroB", randomPosition)
// // jokerArr.push(jokerObj3)
// // let jokerObj4 = new Joker("abajo", randomPosition)
// // jokerArr.push(jokerObj4)

}
function jokerDespawn(){
    if(jokerArr.length > 0 && jokerArr[0].x < (0 - jokerArr[0].w)){
        jokerArr[0].node.remove()

        jokerArr.shift()
    }
}

function alejandroSpawn (){
    let alejandroObj = new Alejandro ("centroA", randomPosition)
alejandroArr.push(alejandroObj)
}

function alejandroDespawn(){
    if(alejandroArr.length > 0 && alejandroArr[0].x < (0 - alejandroArr[0].w)){
        alejandroArr[0].node.remove()

        alejandroArr.shift()
    }
}

function colision(){
jokerArr.forEach((eachJoker) => {
      if (
    eachJoker.x < trumpObj.x + trumpObj.w &&
    eachJoker.x + eachJoker.w > trumpObj.x &&
    eachJoker.y < trumpObj.y + trumpObj.h &&
    eachJoker.y + eachJoker.h > trumpObj.y
      )
   {
// //     // Collision detected!
// //     this.color("green");
// //   } else {
// //     // No collision
// //     this.color("blue");
gameOver()
  }

})
}
function gameOver(){
    console.log("game over")

    clearInterval(gameIntervalId)
    clearInterval(jokerSpawnIntervalId)
    clearInterval(alejandroSpawnIntervalId)

    // faltan intervalos de putin

    gameScreenNode.style.display = "none"
    gameOverScreenNode.style.display = "flex"
}

//Event listeners

startBtnNode.addEventListener("click", () => {
    startGame()
})

window.addEventListener("keydown",(event) => {

    if(event.code === "ArrowDown"){
    trumpObj.jumpDown()
} else if (event.code === "ArrowUp"){
    trumpObj.jumpUp()
}
})

window.addEventListener("keydown",(event) => {

    if(event.code === "ArrowDown"){
    balaObj.jumpDown()
} else if (event.code === "ArrowUp"){
    balaObj.jumpUp()
}
})
       