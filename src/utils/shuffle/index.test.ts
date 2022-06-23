import shuffle from ".";

describe('shuffle', () => {
    it('should return an array of the same length', () => {
        //stuff here
        const myArray = [1, 2, 3];
        shuffle(myArray);
        expect(myArray.length).toBe(3);
    })
    
    it('should return an array with same elements', () => {
        //stuff here
        const myArray = [1, 2, 3];
        shuffle(myArray);
        expect(myArray).toContain(1);
        expect(myArray).toContain(2);
        expect(myArray).toContain(3);
    })

    it('should return an array with contents not in the same order', () => {
        //stuff here too
        const myArray = [1, 2, 3];
        shuffle(myArray);
        // expect(myArray).not.toEqual([1, 2, 3]);
        expect(myArray).not.toEqual([1, 2, 3]);
    })
})
