import { NUMBERS, SQUARE } from "typings";

interface IInput {
  value: NUMBERS;
  square: SQUARE;
}

/**
 * a function to check if the value exists in the given 3x3 square
 * @param object containing a value and a given 3x3 square
 * @returns boolean
 */
function isInSquare({value, square}: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
