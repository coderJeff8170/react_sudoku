import { GRID, NUMBERS } from 'typings';


interface IInput {
    grid: GRID,
    row: number,
    value: NUMBERS
}
/**
 * returns true if current grid row contains the given value
 * @param param0 an object containing the 9x9 grid, the current row, and a value to check
 * @returns boolean
 */
function isInRow({ grid, row, value }: IInput): boolean {
    return grid[row].includes(value);
}

export default isInRow;