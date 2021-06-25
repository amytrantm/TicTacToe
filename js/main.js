import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game()
let gameView = new GameView()

//start a new game button
document.querySelector(".restart").addEventListener("click", () => { onRestartClick()})

let tiles = document.querySelectorAll(".board-tile")

//review this again:
tiles.forEach( tile => {
   tile.addEventListener("click", () => {
      onTileClick(tile.dataset.index)
   })
})

//i = index
function onTileClick(i) {
   //make move
   game.makeMove(i)
   
   //update board
   gameView.updateBoard(game)

   //change turn
   game.nextTurn()
}

function onRestartClick() {
   //reset board
   game = new Game()
   gameView.updateBoard(game)
}






/* test */

/*

gameView.updateBoard(game)


console.log('main: my turn is', game.turn) // call .turn on instance : 'my turn is X'

//call nextTurn() to switch turn
game.nextTurn() 
console.log('main: my turn is', game.turn) // my turn is O

game.makeMove(3)
console.log(game.board)  //
/*
[
null, null, null,
 "O", null, null, 
 null, null, null
]
*/


/*

game.nextTurn()
console.log('main: my turn is', game.turn) // my turn is X

game.makeMove(8)
console.log(game.board)  //
/* 
[
   null, null, null, 
   "O", null, null,
    null, null, "X"
   ]
*/

