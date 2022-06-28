import React, { FC, Children, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, AnyAction } from "redux";

import Block from "./block";
import { Container, Row } from "./styles";

import { createGrid, IReducer, selectBlock } from "reducers";
import { BLOCK_COORDS, INDEX } from "typings";
import useMousetrap from "react-hook-mousetrap";

interface IState {
  selectedBlock?: BLOCK_COORDS;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock: selectedBlock,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  // Other stuff on the way
  // const gridExample = createFullGrid();
  // console.log(gridExample);
  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1] as INDEX,
        ])
      );
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1] as INDEX,
        ])
      );
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0] as INDEX,
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0] as INDEX,
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
  }

  useMousetrap("down", moveDown);
  useMousetrap("up", moveUp);
  useMousetrap("right", moveRight);
  useMousetrap("left", moveLeft);

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        //remember that when mapping, js produces an index, and it's a 'number' type implicitly.
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                //therefore, if you want to make the type more specific, you must cast at usage point
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
