class TicTacToe {
  constructor() {
    this.playerTurn = 'X'
    this.gameBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]    
  }
   
//+1 for X
//-1 for O

  playGame(elementID, column, row){
    document.querySelector(`#${elementID}`).innerText = this.playerTurn
    if (this.playerTurn == 'X'){ 
      this.gameBoard[column][row] = 1 
      this.playerTurn = 'O'
      }
    else if (this.playerTurn == 'O'){
      this.gameBoard[column][row] = -1
      this.playerTurn = 'X'
    }
    this.rowCheck()
    this.columnCheck()
    this.diagonalCheck()
  }


  rowCheck(){
    for (let i = 0; i < 3; i++){
      let check = this.gameBoard[i].reduce((a,b) => a+b)

      if (check == 3) document.querySelector('#xWin').style.display = 'block'
      if (check == -3) document.querySelector('#oWin').style.display = 'block'
    }
  }

  columnCheck(){
    for (let i = 0; i < 3; i++){
      let tempArr = [this.gameBoard[0][i],this.gameBoard[1][i],this.gameBoard[2][i]]
      let check = tempArr.reduce((a,b) => a+b)

      if (check == 3) document.querySelector('#xWin').style.display = 'block'
      if (check == -3) document.querySelector('#oWin').style.display = 'block'
    }
  }

  diagonalCheck(){
    let backslashDiagonal = [this.gameBoard[0][0],this.gameBoard[1][1],this.gameBoard[2][2]]
    let check = backslashDiagonal.reduce((a,b) => a+b)

    let forwardslashDiagonal = [this.gameBoard[0][2],this.gameBoard[1][1],this.gameBoard[2][0]]
    let checkSum = forwardslashDiagonal.reduce((a,b) => a+b)

    if (check == 3 || checkSum == 3) document.querySelector('#xWin').style.display = 'block'
    if (check == -3 || checkSum == -3) document.querySelector('#oWin').style.display = 'block'
  }
}

let game = new TicTacToe