import { GRID, NUMBERS } from "typings";
import { shuffle, isInRow, isInCol } from "utils";

const gridExample = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A recursive function to check all possible combinations of numbers until a solution found
 * @param grid : ; a 9x9 grid for sudoku
 */
function fillGrid(grid: GRID) {
  let row = 0,
    col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      //do stuff
      shuffle(numbers);
      for (let value of numbers) {
        //is it not in the grid row?
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            //is it not in the grid square?
            const square = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
          }
        }

        //if it meets none of these conditions put it in the square
        grid[row][col] = value;
        //if grid is full, we stop and return,
        //otherwise, we run full grid again.
      }

      //recursive things
      break;
    }
  }
}

export default fillGrid;
