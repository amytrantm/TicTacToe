 export default class Game {
   constructor() {
      this.turn = 'X'
      this.board = new Array(9).fill(null)
   }

   nextTurn() {
      if (this.turn === 'X') {
         this.turn = 'O'
      } else {
         this.turn = 'X'
      }
   }

   makeMove(i) {
      //check if there's no more move/ endOfGame -> can't make any more move
      if (this.endOfGame()) {
         return
      }


      //if there's value in the tile,
      if (this.board[i]) {
         return
      }
      //else
      this.board[i] = this.turn; // X or O

      //check if there's a winning combination
      this.findWinningCombinations()
   }

   findWinningCombinations() {
      const winningCombinations = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [6, 4, 2]
      ]

      for (const combination of winningCombinations) {
         const [i, j, k] = combination
         //if there's value on index i, and 2 other values === value at index i ( all X or all 0)
         if (this.board[i]  && (this.board[i] === this.board[j] && this.board[i] === this.board[k] ) ) {
               return combination;
            }
      }
      return null
   }

   //end game when there is winning combination:
   endOfGame() {
      const winningCombination = this.findWinningCombinations()
      if (winningCombination)  return true;
      else return false
   }

}