import createFullGrid from ".";

describe("createFullGrid", () => {
  it("should create a filled 9x9 grid with value range from 1-9 in each square", () => {
    const grid = createFullGrid();
    for (let row in grid) {
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeLessThanOrEqual(9);
      }
    }
  });
});
