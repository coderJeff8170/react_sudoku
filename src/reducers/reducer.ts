import { AnyAction } from "redux";
import * as types from "./types";
import { copyGrid, createFullGrid, removeNumbers, compareArrays } from "utils";
import { IReducer } from "./interfaces";
import { GRID } from "typings";

//TODO: update this to use hooks
const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    }

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        //is it full?
        //is the number just entered correct? (compare the number to the number in the same position of the solved grid)
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("sorry, incorrect choice choice!");
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert("you did it!");
        }
          return { ...state, workingGrid: [...state.workingGrid] as GRID };
        
      }

      return state;
    }

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      };
    default:
      return state;
  }
}

export default reducer;
