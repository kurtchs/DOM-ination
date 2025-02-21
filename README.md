# Description

Dom-ination es un juego inspirado en la serie South Park, que parodia a un personaje llamado Sr. Garrison. En el juego, este personaje satiriza a cierto expresidente de EE.UU. y debe disparar a los enemigos que se le acerquen; si lo tocan, pierde vidas. El jugador puede mover al personaje hacia arriba y abajo usando las flechas del teclado correspondientes. El juego termina cuando se quedan sin vidas, pero si aparece Putin montado en su oso, puede salvarte y devolverte una vida.

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
