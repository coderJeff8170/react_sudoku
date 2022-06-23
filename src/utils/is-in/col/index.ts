import { GRID, NUMBERS } from 'typings';


interface IInput {
    grid: GRID,
    col: number,
    value: NUMBERS
}

function isInCol({ grid, col, value}: IInput): boolean {
    for(let i = 0; i < 9; i++) {
        //is it not in the grid column?
        if(value === grid[i][col]) return true;
    }
    return false;
}

export default isInCol;