export default class GameView {
   constructor(game) {
      this.game = game;
   }
   
   onMove(i) {
      if (this.game.isTileFilled(i)) {
         return;
      }
      this.updateTile(i);
      this.updateBoard();
      this.updateTurn();
   }

   clearBoard(game) {
      this.game = game
      document.querySelectorAll('.board-tile').forEach(tile => {
         tile.classList.remove('tile-winner')
         tile.innerHTML = null
      });
      const winnerAnnouncement = document.querySelector(".winner-announcement");
      winnerAnnouncement.innerHTML = '';

      let playerX = document.querySelector(".player-x")
      playerX.classList.add('active')

      let playerO = document.querySelector(".player-o")
      playerO.classList.remove('active')

   }

   updateTile(i) {
      this.game.makeMove(i);
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);      
      let tileType = this.game.board[i] === 'X' ? 'tile-x' : 'tile-o'
      tile.innerHTML = `<span class="${tileType}">${this.game.board[i] ? this.game.board[i] : ""} </span>`
   }

   updateBoard() {
     const winningCombination = this.game.findWinningCombinations();
     const winnerAnnouncement = document.querySelector(".winner-announcement")

     const gameBoardIsFull = this.game.isBoardFull();

      if (winningCombination) {
         winningCombination.forEach((winningIndex) => {
            const tile = document.querySelector(`.board-tile[data-index='${winningIndex}']`);
            tile.classList.add('tile-winner');
         })
         winnerAnnouncement.innerHTML = `Player ${this.game.turn} won!`
      } else if (gameBoardIsFull) {
         winnerAnnouncement.innerHTML = `No winner for this game`
      } else if (!winningCombination) {
         winnerAnnouncement.innerHTML = null
      } 
   }

   // Player X   ----- Player O
   updateTurn() {
      this.game.nextTurn();
      
      let playerX = document.querySelector(".player-x")
      let playerO = document.querySelector(".player-o")
      //REMOVE the style before ADDING
      playerX.classList.remove('active')
      playerO.classList.remove('active')

      if (this.game.turn === 'X' ) {
         playerX.classList.add('active')
      } else {
         playerO.classList.add('active')
      }
   }
}