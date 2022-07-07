import { GRID, NUMBERS } from "typings";
import global from "global";
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *
 * @param grid : ;
 * @returns
 */
function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  //loop through whole grid
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9); //stays 0 on first pass, 1 on second pass, etc
    col = i % 9; //for each pass(row) this will be 0, 1, 2, 3, 4, etc

    //if block is empty
    if (grid[row][col] === 0) {
      //run through all the possible numbers and check if they exist in row, col, or square
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            //determine square
            const square = identifySquare({ grid, row, col });
            if (!isInSquare({ value, square })) {
              //if not, assign the value?
              grid[row][col] = value;
              //if grid is full, increment counter and break out of loop
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) {
                return true;
              }
            }
          }
        }
      }
      break;
    }
  }
  // return false; //TODO: check this
}

export default solveGrid;
