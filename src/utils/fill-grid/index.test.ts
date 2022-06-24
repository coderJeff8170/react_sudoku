import { GRID } from "typings";
import fillGrid from ".";
import { checkGrid } from "utils";

describe("fill grid", () => {
  it("should fill a completely filled grid", () => {
    const gridExample: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    fillGrid(gridExample);
    console.log(gridExample);
    expect(checkGrid(gridExample)).toBeTruthy();
  });

  it("should fill a valid partially filled grid", () => {
    const gridExample: GRID = [
      [0, 0, 1, 0, 0, 0, 6, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 5, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 9, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 8, 0],
      [0, 7, 0, 0, 0, 0, 0, 0, 0],
    ];
    fillGrid(gridExample);
    console.log(gridExample);
    expect(checkGrid(gridExample)).toBeTruthy();
  });
});
