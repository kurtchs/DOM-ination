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

//Funciones
function startGame(){

    startScreenNode.style.display = "none"
    gameScreenNode.style.display = "flex"

    trumpObj = new Trump()

    // jokerObj = new Joker()

    setInterval (() => {
        gameLoop()

    },Math.round(1000/60))

    setInterval(() => {
        jokerSpawn()
    }, 2000)

}

function gameLoop(){

jokerArr.forEach((eachJoker) => {
    eachJoker.movement()
})

jokerDespawn()

}

function jokerSpawn(){
let jokerObj = new Joker()
jokerArr.push(jokerObj)

}
function jokerDespawn(){
    if(jokerArr.length > 0 && jokerArr[0].x < (0 - jokerArr[0].w)){
        jokerArr[0].node.remove()

        jokerArr.shift()
    }
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
       