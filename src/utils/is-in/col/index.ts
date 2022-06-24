import { GRID, NUMBERS } from 'typings';


interface IInput {
    grid: GRID,
    col: number,
    value: NUMBERS
}

/**
 * a function to check if the submitted value exists in any column of the grid
 * @param input object containing a 9x9 grid, a column number, and a value between 1 and 9 inc.
 * @returns boolean
 */
function isInCol({ grid, col, value}: IInput): boolean {
    for(let i = 0; i < 9; i++) {
        //is it not in the grid column?
        if(value === grid[i][col]) return true;
    }
    return false;
}

export default isInCol;