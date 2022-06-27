import { Action, AnyAction } from "redux";
import { BLOCK_COORDS } from "typings";
import * as types from "./types";

export const createGrid = (): Action => ({
  type: types.CREATE_GRID,
});

//AnyAction is used here because of the payload 'coords' which is sent with the action type
export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
});
