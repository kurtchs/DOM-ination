// pantallas
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over");

// botones
const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");
// const vidaRestante = document.querySelectorAll(".heart")

// Variables Globales
let trumpObj = null;

let jokerArr = [];
let alejandroArr = [];

let gameIntervalId = null;
let jokerSpawnIntervalId = null;
let balaArr = [];
let vidas =  3

//Funciones
function startGame() {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  trumpObj = new Trump();

  gameIntervalId = setInterval(() => {
    gameLoop();
    console.log("patata")
  }, Math.round(1000 / 60));

  jokerSpawnIntervalId = setInterval(() => {
    jokerSpawn();
  }, 2000);

  alejandroSpawnIntervalId = setInterval(() => {
    alejandroSpawn();
  }, 2200);
}

function gameLoop() {
  jokerArr.forEach((eachJoker) => {
    eachJoker.movement();
  });

  alejandroArr.forEach((eachAlejandro) => {
    eachAlejandro.movement();
  });

  balaArr.forEach((eachBala) => {
    eachBala.fireMovement();
  });

  jokerDespawn();
  colision();
  colisionAlejandro()
  alejandroDespawn();
  balaColisionJoker();
  balaColisionAlejandro()
  //   balaDespawn()
}

function jokerSpawn() {
  randomPosition = Math.floor(Math.random() * 500);

  let jokerObj1 = new Joker("arriba", randomPosition);
  jokerArr.push(jokerObj1);
//   let jokerObJ2 = new Joker("centroA", randomPosition)
//   jokerArr.push(jokerObJ2)
//   let jokerObj3 = new Joker("centroB", randomPosition)
//   jokerArr.push(jokerObj3)
//   let jokerObj4 = new Joker("abajo", randomPosition)
//   jokerArr.push(jokerObj4)
//   console.log(jokerArr.length)
}
function jokerDespawn() {
  if (jokerArr.length > 0 && jokerArr[0].x < (0 - jokerArr[0].w)) {
    jokerArr[0].node.remove(); //este remove lo que hace es remover el nodo como parte visual del juego

    jokerArr.shift();// remueve el primer valor del array
  }
}

function alejandroSpawn() {
randomPosition = Math.floor(Math.random() * 500);
  let alejandroObj = new Alejandro("centroA", randomPosition);
  alejandroArr.push(alejandroObj);
}

function alejandroDespawn() {
  if (alejandroArr.length > 0 && alejandroArr[0].x < (0 - alejandroArr[0].w)) {
    alejandroArr[0].node.remove();

    alejandroArr.shift();
  }
}


// function balaDespawn() {
//   if (balaArr.length > 0 && balaArr[0].x < 0 - balaArr[0].w) {
//     balaArr[0].node.remove();

//     balaArr.shift();
//   }
// }

function colision() {
  jokerArr.forEach((eachJoker, indiceJoker) => {
    if (
      eachJoker.x < trumpObj.x + trumpObj.w &&
      eachJoker.x + eachJoker.w > trumpObj.x &&
      eachJoker.y < trumpObj.y + trumpObj.h &&
      eachJoker.y + eachJoker.h > trumpObj.y
    ) {
         eachJoker.node.remove();
        jokerArr.splice(indiceJoker, 1);
        
         actualizarVidas()
        // gameOver();
    }
  });
}

function colisionAlejandro(){
    alejandroArr.forEach((eachAlejandro, indiceAlejandro) => {
    if (
      eachAlejandro.x < trumpObj.x + trumpObj.w &&
      eachAlejandro.x + eachAlejandro.w > trumpObj.x &&
      eachAlejandro.y < trumpObj.y + trumpObj.h &&
      eachAlejandro.y + eachAlejandro.h > trumpObj.y
    ) {
         eachAlejandro.node.remove();
        alejandroArr.splice(indiceAlejandro, 1);
      
         actualizarVidas()
    
    }
  });
}

function balaColisionJoker() {
  jokerArr.forEach((eachJoker, indiceJoker) => {
    balaArr.forEach((eachBala, indiceBala) => {
      if (
        eachJoker.x < eachBala.x + eachBala.w &&
        eachJoker.x + eachJoker.w > eachBala.x &&
        eachJoker.y < eachBala.y + eachBala.h &&
        eachJoker.y + eachJoker.h > eachBala.y
      ) {
        eachJoker.node.remove();
        jokerArr.splice(indiceJoker, 1);

        eachBala.node.remove();
        balaArr.splice(indiceBala, 1);
      }
    });
  });
}

function balaColisionAlejandro() {
  alejandroArr.forEach((eachAlejandro, indiceAlejandro) => {
    balaArr.forEach((eachBala, indiceBala) => {
      if (
        eachAlejandro.x < eachBala.x + eachBala.w &&
        eachAlejandro.x + eachAlejandro.w > eachBala.x &&
        eachAlejandro.y < eachBala.y + eachBala.h &&
        eachAlejandro.y + eachAlejandro.h > eachBala.y
      ) {
        eachAlejandro.node.remove();
        alejandroArr.splice(indiceAlejandro, 1);

        eachBala.node.remove();
        balaArr.splice(indiceBala, 1);
      }
    });
  });
}

function gameOver() {
  console.log("game over");

  clearInterval(gameIntervalId);
  clearInterval(jokerSpawnIntervalId);
  clearInterval(alejandroSpawnIntervalId);

  // faltan intervalos de putin

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
}

function restarGame() {
  gameBoxNode.innerHTML = null;
  gameOverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  trumpObj = null;

  jokerArr = [];
  alejandroArr = [];

  gameIntervalId = null;
  jokerSpawnIntervalId = null;
  balaArr = [];
  vidas = 3
// tenemos que hacer que vuelvan aparecer los 3 corazones
console.log("cualquier cosa")
if(vidas === 3){
    document.querySelector("#corazon").style.visibility = "visible"
    document.querySelector("#corazon2").style.visibility = "visible"
    document.querySelector("#corazon3").style.visibility = "visible"
    
}



  //   gameIntervalId = setInterval(() => {
  //     gameLoop();
  //   }, Math.round(1000 / 60));
}

function actualizarVidas() { 
    
    //deberia restar vidas
    vidas--
    console.log( vidas)
    //deberia actualizar los corazones


    //cuando se pierden las 3 vidas game over
    if(vidas === 0) {
        gameOver()
    }

    if (vidas === 3){
        document.querySelector("#corazon").style.visibility = "visible"
        document.querySelector("#corazon2").style.visibility = "visible"
        document.querySelector("#corazon3").style.visibility = "visible"
    }
    if (vidas === 2){
        document.querySelector("#corazon").style.visibility = "visible"
        document.querySelector("#corazon2").style.visibility = "visible"
        document.querySelector("#corazon3").style.visibility = "hidden"
    }
    if (vidas === 1){
        document.querySelector("#corazon").style.visibility = "visible"
        document.querySelector("#corazon2").style.visibility = "hidden"
        document.querySelector("#corazon3").style.visibility = "hidden"
    }
    // if (){
    //     document.querySelector("#corazon").style.visibility = "hidden"
    //     document.querySelector("#corazon2").style.visibility = "hidden"
    //     document.querySelector("#corazon3").style.visibility = "hidden"
    // } 
    
    
}

//Event listeners

startBtnNode.addEventListener("click", () => {
  startGame();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown") {
    trumpObj.jumpDown();
  } else if (event.code === "ArrowUp") {
    trumpObj.jumpUp();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    let balaObj = new Bala(trumpObj.y); //  estoy creando un objeto y lo estoy metiendo en una variable de tipo objeto

    //añadir bala en el array

    balaArr.push(balaObj);
    console.log(balaArr);
  }
});

restartBtnNode.addEventListener("click", () => {
  restarGame();
  startGame();
});
