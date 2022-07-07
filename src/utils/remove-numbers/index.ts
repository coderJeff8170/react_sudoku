import { GRID } from "typings";
import copyGrid from "utils/copy-grid";
import getRandomIndex from "utils/get-random-index";
import global from 'global'
import solveGrid from "utils/solve-grid";

/**
 *
 * Removes numbers from a full grid to create the sudoku puzzle
 *
 * @param grid 9x9 sudoku grid
 * @param attempts number of attempts to solve puzzle (higher is more difficult)
 * @returns a grid with numbers removed
 */
function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    //if the square is already empty, find one that isn't
    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    //copy grid
    const gridCopy = copyGrid(grid);

    //set a global counter
    global.counter = 0;
    //attempt to solve grid
    solveGrid(gridCopy);
    //if global counter is not 1
    //  grid[row][col] = backup
    //  decrement attempts
    if(global.counter !==1) {
        grid[row][col] = backup;
        attempts--;
    }
  }
  return grid;
}

export default removeNumbers;
