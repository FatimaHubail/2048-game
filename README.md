# 2048 Game

**2048** is a single-player sliding tile puzzle game built with HTML, CSS, and vanilla JavaScript. Players use the arrow keys to slide numbered tiles across a 4x4 grid. When two tiles with the same number collide, they merge into one tile with double the value. The goal is to keep merging tiles until you create a tile with the number **2048**.

The project focuses in practicing core JavaScript concepts including:
- Working with 2D arrays and grid-based state.
- Writing pure functions to handle sliding and merging logic.
- Attaching keyboard event listeners (`keydown`).
- Dynamically rendering game state to the DOM.
- Win/lose condition detection.

## How to Play

- Use **arrow keys** (`↑ ↓ ← →`) to slide all tiles in that direction.
- Tiles with the same number merge into one when they collide, doubling in value.
- A new tile (2, 4, etc...) appears after every move.
- **Win** by creating a tile with the value 2048.
- **Lose** when the board is full and no adjacent tiles can merge.

## Project Planning

The following planning process and pseudocode template were used to break the project down into manageable steps before writing any code.

---

### User Stories

A user story is a simple description of a feature told from the perspective of the person who desires the new capability; in our case, this will be a user of our game.

Let's look at the user stories written for our 2048 game:

- As a user, I want to see a 4x4 grid with two starting tiles when the page loads, so I know the game has begun.
- As a user, I want to slide tiles using the arrow keys, so I can play using just my keyboard.
- As a user, I want tiles with the same number to merge into one when they collide, so I can build toward higher values.
- As a user, I want to see my score update after every move, so I can track how well I'm doing.
- As a user, I want a new tile to appear after each valid move, so the board keeps evolving.
- As a user, I want to be clearly told when I reach the 2048 tile, so I know I've won.
- As a user, I want to be clearly told when no more moves are possible, so I know the game has ended.
- As a user, I want a "New Game" button, so I can restart without refreshing the page.

### Pseudocode

Pseudocode is a way of writing out the steps of our game or program in plain English. It is a great way to plan out the logic of our game before we start writing any code.

Here is the 2048 game pseudo-code: 

**Define constants and variables.**
```
// Define a constant for the grid size (4x4)
// Define a constant for the winning tile value (2048)
```

**Define the app's state variables, without assigning values to them.**
```
// Define a variable for the grid (2D array of tiles)
// Define a variable for the current score
// Define a variable for the best score
// Define a variable for whether the game is over
// Define a variable for whether the player has won
```

**Select and save (cache) elements in variables that need to be accessed in the JavaScript code more than once.**
```
// Select the board container element
// Select the score display element
// Select the best score display element
// Select the message display element
// Select the "New Game" button element
```

**Add event listeners - use delegated event listeners to listen to multiple elements with a single listener.**
```
// Add a keydown event listener to the document to detect arrow key presses
// Add a click event listener to the "New Game" button
```

**Invoke the init function used to initialize all state variables.**
```
// Set the grid to an empty 4x4 grid
// Set the score to 0
// Set gameOver to false
// Set won to false
// Add two random tiles (value 2 or 4) to random empty cells
```

**Invoke the primary render function that transfers all state variables to the DOM.**
```
// FOR each cell in the grid
    // IF the cell contains a tile THEN draw a tile with its value
    // ELSE draw an empty cell
// Render the current score and best score to the DOM
```

**Wait for the user to press an arrow key.**
```
// WHEN an arrow key is pressed
    // Determine the direction (up, down, left, or right)
    // FOR each row or column in that direction
        // Slide all tiles together, removing empty gaps
        // IF two adjacent tiles have the same value AND neither has merged yet this move
            // THEN merge them into one tile with double the value
            // Add the merged value to the score
    // IF at least one tile moved or merged
        // THEN add a new random tile to a random empty cell
```

**Update all state variables with the correct values depending on the user's choice.**
```
// Update the grid with the new tile positions after sliding and merging
// Update the score with any points gained from merges
// IF the best score is less than the current score
    // THEN update the best score
// IF any tile in the grid equals 2048 AND the player hasn't already won
    // THEN set won to true
    // Display a "you win" message
// IF the grid is full AND no two adjacent tiles share the same value
    // THEN set gameOver to true
    // Display a "game over" message
```

**Invoke the primary render function.**
```
// Re-render the grid, score, and any win/lose message to the DOM
```

**Wait for the user to click the "New Game" button.**
```
// Select the "New Game" button and add an event listener. On click:
    // Re-run the init function to reset the grid, score, gameOver, and won variables
    // Re-render the board
```