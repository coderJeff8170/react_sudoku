import React, { FC, useCallback } from "react";

//this comes from components/styles, coz index.ts exports all from styles, and inside styles, button is defined as a styled component :/
import { Button } from "components";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import { createGrid } from "reducers";

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const handleReset = useCallback(() => {
    if (window.confirm("are you sure you want to reset the game?"))
      dispatch(createGrid());
  }, [dispatch]);

  return <Button onClick={handleReset}>New Game</Button>;
};

export default NewButton;
