import React, { FC, Children, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";

import Block from "./block";
import { Container, Row } from "./styles";

import { createGrid } from "reducers";

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  // Other stuff on the way
  // const gridExample = createFullGrid();
  // console.log(gridExample);
  useEffect(() => {
    create();
  }, [create]);

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
