/*-------------- Constants -------------*/
const BOARD_SIZE = 4; // 4 rows x 4 cols
const WIN_TILE = 2048;

/*---------- Variables (state) ---------*/
let board; 
let currentScore;
let bestScore = 0;
let gameOver;
let hasWon;
let cellElements;

/*----- Cached Element References  -----*/
const boardEl = document.querySelector('#board');
const scoreEl = document.querySelector('#score-value');
const bestScoreEl = document.querySelector('#best-value');
const msgEl = document.querySelector('.msg-area');
const newGameBtnEl = document.querySelector('#new-game');

/*-------------- Functions -------------*/
const randomTile = () => { // fills random empty cell within the board with random number between 2 or 4
    let emptyCells = [];
    board.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            if (cell === null) {
                emptyCells.push({ row: rowIdx, col: colIdx });
            }
        });
    });
    
    if (emptyCells.length === 0) { return; } // if there are no empty cells

    let randomNum = Math.random() < 0.9 ? 2 : 4; // choose random num (2 or 4), 90% chance of 2, 10% chance of 4 
    let randomIdx = Math.floor(Math.random() * emptyCells.length); // choose random index from emptyCells array

    let choosenCell = emptyCells[randomIdx];
    board[choosenCell.row][choosenCell.col] = randomNum;
} 

const init = () => {
    board = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]; // 2D array for board cells
    currentScore = 0; 
    gameOver = false;
    hasWon = false;
    randomTile();
    randomTile(); 
    // generate 2 random cells
}

const buildBoardCells = () => { // function to build the cells of the boards (16 cells) and store their references
    cellElements = [];
    for (let row = 0; row < BOARD_SIZE; row++){
        let rowEls = [];
        for (let col = 0; col < BOARD_SIZE; col++){
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            boardEl.appendChild(cellDiv);
            rowEls.push(cellDiv);
        }
        cellElements.push(rowEls);
    }
}

const render = () => { // updates cells with new values alongside their references
    for (let row = 0; row < BOARD_SIZE; row++){
        for (let col = 0; col < BOARD_SIZE; col++){
            const value = board[row][col];
            const cellDiv = cellElements[row][col];

            if (value === null) {
                cellDiv.textContent = '';
                cellDiv.classList.add('hide');
            } else {
                cellDiv.textContent = value;
                cellDiv.classList.remove('hide');
            }
        }
    }
    scoreEl.textContent = currentScore;
    bestScoreEl.textContent = bestScore;
}

const slideMerge = (line) => {
    let filteredFromNull = line.filter(value => value!== null);
    // extract the cells that has values within the row/col

    let merged = [];
    for (let i = 0; i < filteredFromNull.length; i++) {
        if (i < filteredFromNull.length -1 && filteredFromNull[i] === filteredFromNull[i + 1]) {
            merged.push(filteredFromNull[i] * 2);
            i++; // skip the next value since it was just consumed by the merge
            // merges and doubles value of identical adjacents  
        } else {
            merged.push(filteredFromNull[i]);
            // not identical adjacents case
        }
    }

    while (merged.length < 4) {
        merged.push(null);
    } // fill the remainder of the array with nulls
    return merged;
}

const moveLeftUp = () => {
    let merged;
    board.forEach((row, rowIdx) => {
        merged = slideMerge(row);
        board[rowIdx] = merged;
    })
}

const moveRightDown = () => {
    let merged;
    let reversed;
    board.forEach((row, rowIdx) => {
        reversed = row.toReversed();
        merged = slideMerge(reversed);
        board[rowIdx] = merged.reverse();
    })
}


/*----------- Event Listeners ----------*/
// const keyDown = document.addEventListener('keydown', handleKeyDown);
// const btnClick = newGameBtnEl.addEventListener('click', handleNewGame);

// buildBoardCells();
// init();  
// render(); 
// board = [
//     [2, 2, 2, 2],
//     [null, null, null, null],
//     [null, null, null, null],
//     [null, null, null, null]
// ];
// moveRightDown();
// console.table(board)
