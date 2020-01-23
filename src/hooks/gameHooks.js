export const generateBoardForPlay= function(){
  const gameBoard = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   ]

  const generateBombs = function() {
    let array = [];
    while(array.length < 80){
    let bomb = [Math.floor(Math.random() * 15), Math.floor(Math.random() * 15)];
    if(array.indexOf(bomb) === -1) array.push(bomb);
  } return array

} 

  const bombArr = generateBombs()
  const addBombsToBoard = function(gameBoard){
    let count = 0;
    for (let x of bombArr) {
          if(gameBoard[x[0]][x[1]] !== 99 && count < 40 ) {
            count ++;
            gameBoard[x[0]][x[1]] = 99
        }
    } 
    return gameBoard
  }
  const board= addBombsToBoard(gameBoard)

  const addWarnings = function(array) {
    for(let x in array) {
      if (array[x]===99 && x > 0 && array[x-1] !==99) {
        array[x-1] += 1
      }
    }
    for(let i = array.length-1; i >= 0; i --) {
      if (array[i]===99 && i < 15 && array[i+1] !==99) {
        array[i+1] += 1
      }
    }
    return array
  }

  addWarnings(board[0]) 
  addWarnings(board[1])
  addWarnings(board[2])
  addWarnings(board[3])
  addWarnings(board[4])
  addWarnings(board[5])
  addWarnings(board[6])
  addWarnings(board[7])
  addWarnings(board[8])
  addWarnings(board[9])
  addWarnings(board[10])
  addWarnings(board[11])
  addWarnings(board[12])
  addWarnings(board[13])
  addWarnings(board[14])
  addWarnings(board[15])
  
 
  const addVeritcalWarnings = function(gameBoard) {
    
    for (let rowIndex = 0; rowIndex < gameBoard.length; rowIndex++) {
      let currentRow, previousRow, nextRow;
      currentRow = gameBoard[rowIndex];
      if (rowIndex > 0) { previousRow = gameBoard[rowIndex - 1]; }
      if (rowIndex < gameBoard.length - 1) { nextRow = gameBoard[rowIndex + 1]; }
    
      for (let colIndex = 0; colIndex < currentRow.length; colIndex++) {
    
        if (previousRow && gameBoard[rowIndex][colIndex] === 99){
          if (previousRow[colIndex] !== 99) { 
            previousRow[colIndex] +=1;
          }
          if (previousRow[colIndex + 1] !== 99) {
          previousRow[colIndex +1 ] +=1; 
          }
          if (previousRow[colIndex - 1] !== 99) {
          previousRow[colIndex -1 ] +=1;
          }
        }
       
        if(nextRow && gameBoard[rowIndex][colIndex] === 99) {
            if (nextRow[colIndex] !== 99) {
              nextRow[colIndex] +=1;
            }
            if (nextRow[colIndex-1] !== 99) { 
              nextRow[colIndex -1] +=1
            }
            if (nextRow[colIndex+ 1] !==99) {
              nextRow[colIndex +1] +=1
            }
        }
      }
    } return gameBoard
    }
  const finalBoard = addVeritcalWarnings(board);
  
  return finalBoard;
}  