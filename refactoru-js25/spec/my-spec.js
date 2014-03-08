describe("Chunk", function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    it("array match", function() {
        expect(chunk(input, 2)).toEqual([ [1,2,3,4,5], [6,7,8,9,10] ]);
    });
});

describe("Chunk", function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    it("array match", function() {
        expect(chunk(input, 3)).toEqual([ [1,2,3,4], [5,6,7], [8,9,10] ]);
    });
});

describe("Chunk", function() {
    var input = [1,2,3,4,5,6,7,8,9,10];
    it("array match", function() {
        expect(chunk(input, 7)).toEqual([ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]);
    });
});
