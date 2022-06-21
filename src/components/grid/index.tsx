import React, { FC } from "react";

const Grid: FC = () => {
  // Other stuff on the way

  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => {
          return (
            <div data-cy="grid-row-container">
              {React.Children.toArray(
                [...Array(9)].map((_, colIndex) => {
                  return <div data-cy="block">{`${rowIndex} ${colIndex}`}</div>;
                })
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Grid;
