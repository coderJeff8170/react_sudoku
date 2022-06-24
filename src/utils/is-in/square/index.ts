import { NUMBERS, SQUARE } from "typings";

interface IInput {
  value: NUMBERS;
  square: SQUARE;
}

function isInSquare({value, square}: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
