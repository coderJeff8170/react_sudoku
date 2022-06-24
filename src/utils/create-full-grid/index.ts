import { GRID } from "typings";
import { fillGrid } from "utils";

/**
 * a function to fill an empty sudoku grid with legit values
 * @params none
 * @returns a filled 9x9 sudoku grid
 */
function createFullGrid(): GRID {
  const grid: GRID = [
    [0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  fillGrid(grid);
  return grid;
}

export default createFullGrid;
