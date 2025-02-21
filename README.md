# Description

Kraken Brigade is a game where players try to defend a fort from the impending attack of sea creatures. The game ends when enough tentacles are stacked in front of the fort wall at the bottom of the screen. After the game ends, a score is calculated based on the amount of tentacles destroyed and the amount of time the game lasted.

# Main Functionalities

- El personaje principal puede moverse de arriba a abajo y, con la barra espaciadora, dispara.
- Tiene un conteo de vidas que se va reduciendo si los enemigos lo tocan.
- Puedes recuperar vida si el personaje Putin te toca.
- Un conteo de kills que va aumentando mientras más enemigos aniquiles.

# Backlog Functionalities

- JS Audio()
- Enemigos con mas vida.
- Cambio de tipos de balas.

# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Audio() and JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

## main.js

- colision()
- colisionAlejandro()
- colisionPutin()
- balaColisionJoker()
- balaColisionAlejandro()
- gameOver()
- restarGame()
- aumentoVidas()
- actualizarVidas()
- actualizarKills()

## trump.js

- Trump ()
  - this.x
  - this.y
  - this.w
  - this.h
  - this.jump
  - jumpDown()
  - jumpUp()

## alejandro.js

- Alejandro ()
  - this.x
  - this.y
  - this.w
  - this.h
  - movement()

## bala.js

- Bala ()
  - this.x
  - this.y
  - this.w
  - this.h
  - movementSpeed()
  - fireMovement()

## joker.js

- Joker ()
  - this.x
  - this.y
  - this.w
  - this.h
  - movement()

## putin.js

- Putin ()
  - this.x
  - this.y
  - this.w
  - this.h
  - movement()
