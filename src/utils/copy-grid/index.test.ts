import  copyGrid  from '.'
import createFullGrid from 'utils/create-full-grid'
import { GRID } from 'typings';

describe('copyGrid', () => {
    it('should return an exact copy of the two dimensional grid', () => {
        const gridToCopy: GRID = createFullGrid();

        const copiedGrid: GRID = copyGrid(gridToCopy);

        expect(gridToCopy).toEqual(copiedGrid);

    })
})