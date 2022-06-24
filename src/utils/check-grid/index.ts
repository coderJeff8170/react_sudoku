import { GRID } from 'typings'

/**
 * a function to check whether a grid has any zeroes in it or not, thereby determining whether grid is fully filled with legit values...
 * @param grid : 9x9 sudoku grid;
 * @returns boolean
 */
function checkGrid(grid: GRID): boolean {
    //do things
    for(let y = 0; y < 9; y++) {
        for(let x = 0; x < 9; x++) {
            if(grid[y][x] === 0) return false;
        }
    }
    return true;
}

export default checkGrid;