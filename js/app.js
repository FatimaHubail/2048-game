/*-------------- Constants -------------*/
const BOARD_SIZE = 4; // 4 rows x 4 cols
const WIN_TILE = 2048;

/*---------- Variables (state) ---------*/
let board; 
let currentScore;
let bestScore;
let gameOver;
let hasWon;

/*----- Cached Element References  -----*/
const boardEl = document.querySelector('#board');
const scoreEl = document.querySelector('#score');
const bestScoreEl = document.querySelector('#best-score');
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


/*----------- Event Listeners ----------*/
const keyDown = newGameBtnEl.addEventListener('keydown', handleKeyDown);
const btnClick = document.addEventListener('click', handleNewGame);