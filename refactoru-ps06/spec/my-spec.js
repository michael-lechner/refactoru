describe('secondGreatLow', function() {
    it('should handle multiple digits that are the same at the start of the array', function () {
        expect(secondGreatLow([7, 7, 12, 98, 106])).toEqual('12 98');
    });

    it('should handle multiple digits that are the same at the end of the array', function () {
        expect(secondGreatLow([7, 12, 98, 106, 106])).toEqual('12 98');
    });

    it('should handle unsorted arrays', function () {
        expect(secondGreatLow([7, 12, 106, 7, 106, 98])).toEqual('12 98');
    });

    it('should handle an array of two', function () {
        expect(secondGreatLow([7, 12])).toEqual('12 7');
    });

    it('should handle an array of three', function () {
        expect(secondGreatLow([7, 3, 12])).toEqual('7 7');
    });

    it('should handle an array with all the same values', function () {
        expect(secondGreatLow([1, 1, 1, 1, 1, 1, 1])).toEqual('1 1');
        expect(secondGreatLow([0, 0, 0, 0, 0, 0, 0])).toEqual('0 0');
        expect(secondGreatLow([7, 7, 7, 7, 7, 7, 7])).toEqual('7 7');
    });
});

describe('timeConvert', function() {
    it('should handle cases over an hour', function () {
        expect(timeConvert(63)).toBe('1:3');
    });

    it('should handle cases under an hour', function () {
        expect(timeConvert(59)).toBe('0:59');
    });

    it('should handle cases with several hours', function () {
        expect(timeConvert(129)).toBe('2:9');
    });

    it('should handle a time of zero', function () {
        expect(timeConvert(0)).toBe('0:0');
    });

    it('should handle a string', function () {
        expect(timeConvert('63')).toBe('1:3');
    });
});

describe('bracketMatcher', function() {
    it('should return true for the same number of brackets', function () {
        expect(bracketMatcher('(hello (world))')).toBe(true);
        expect(bracketMatcher('()')).toBe(true);
    });

    it('should return false for the same number of brackets', function () {
        expect(bracketMatcher('(hello (world)')).toBe(false);
        expect(bracketMatcher('((hello (world))')).toBe(false);
    });

});