export default class GameView {


   updateBoard(game) {
     this.updateTurn(game)

     const winningCombination = game.findWinningCombinations();


      //iterate through the array
      for (let i = 0; i < game.board.length; i++){
         const tile = document.querySelector(`.board-tile[data-index='${i}']`)
         // tile.textContent = game.board[i] // note? 
         
         tile.classList.remove('tile-winner')

         //style X using class 'tile-x"
         let tileType = game.board[i] === 'X' ? 'tile-x' : 'tile-o'
         tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : "" } </span>`

         //if winner found, add "green " css
         if (winningCombination && winningCombination.includes(i)) {
            tile.classList.add("tile-winner");
         }
      } 
      
   }

   // Player X   ----- Player O
   updateTurn(game) {
      let playerX = document.querySelector(".player-x")
      let playerO = document.querySelector(".player-o")
      //REMOVE the style before ADDING
      playerX.classList.remove('active')
      playerO.classList.remove('active')

      if (game.turn === 'X' ) {
         playerX.classList.add('active')
      } else {
         playerO.classList.add('active')
      }
   }
}