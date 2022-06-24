import isInSquare from ".";
import { SQUARE }from 'typings'

describe('isInSquare', () => {
    it('should return true if value is in square', () => {
        
        const mySquare: SQUARE = [
            [5, 7, 3],
            [6, 1, 9],
            [4, 8, 2]
        ]
        expect(isInSquare({ value: 6, square: mySquare})).toBeTruthy();
    })

    it('should return false if value is in square', () => {
        
        const mySquare: SQUARE = [
            [5, 7, 3],
            [6, 1, 9],
            [4, 0, 2]
        ]
        expect(isInSquare({ value: 8, square: mySquare})).toBeFalsy();
    })
})