describe('getDayName', function() {
     it('should return Sunday for 0', function() {
         expect(getDayName(0)).toBe('Sunday');
     });
     it('should return Monday for 1', function() {
         expect(getDayName(1)).toBe('Monday');
     });
     it('should return Tuesday for 2', function() {
         expect(getDayName(2)).toBe('Tuesday');
     });
     it('should return Wednesday for 3', function() {
         expect(getDayName(3)).toBe('Wednesday');
     });
     it('should return Thursday for 4', function() {
         expect(getDayName(4)).toBe('Thursday');
     });
     it('should return Friday for 5', function() {
         expect(getDayName(5)).toBe('Friday');
     });
     it('should return Saturday for 6', function() {
         expect(getDayName(6)).toBe('Saturday');
     });
});

describe('join', function() {
    it('should concatenate each element of the array with a given delim', function () {
        expect(join(['one', 'two', 'three'], ' and ')).toEqual('one and two and three');
    });

    it('different delims shouldn not cause a problem', function () {
        expect(join(['one', 'two', 'three'], ',')).toEqual('one,two,three');
        expect(join(['one', 'two', 'three'], '')).toEqual('onetwothree');
        expect(join(['one', 'two', 'three'], ' ')).toEqual('one two three');
        expect(join(['one', 'two', 'three'], '3')).toEqual('one3two3three');
        expect(join(['one', 'two', 'three'], 'a')).toEqual('oneatwoathree');

    });

    it('an array of integers should not cause a problem', function () {
        expect(join([1, 2, 3], ',')).toEqual('1,2,3');
    });
});

describe('map', function() {
    it('should not modify the original array', function () {
        var a = [1, 2, 3];
        map(a, function(item){
            return item + 1
        });
        expect(a).toEqual([1, 2, 3]);
    });

    it('should apply the given function to every item in the array', function () {
        expect(map([1, 2, 3], function (item) { return item + 1 })).toEqual([2, 3, 4]);
    });

    it('should work with different input types', function () {
        expect(map([true, true, false], function (item) { return !item })).toEqual([false, false, true]);
        expect(map(['cat', 'dog', 'horse'], function (item) { return item + 's' })).toEqual(['cats', 'dogs', 'horses']);
    });

    it('should handle an empty array as input', function () {
        expect(map([], function (item) { return item + 1 })).toEqual([]);
    });

    it('should handle not passing a function', function () {
        expect(map([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle a function that does nothing', function () {
        expect(map([1, 2, 3], function (item) {})).toEqual([undefined, undefined, undefined])
    })

});

describe('filter', function() {
    it('should not modify the original array', function () {
        var a = [1, 2, 3];
        map(a, function(item){
            return item < 3;
        });
        expect(a).toEqual([1, 2, 3]);
    });

    it('should apply the given filter to every item in the array', function () {
        expect(filter([1, 2, 3], function (item) { return item < 3 })).toEqual([1, 2]);
    });

    it('should work with different input types', function () {
        expect(filter([true, false, true], function (item) { return item })).toEqual([true, true]);
        expect(filter(['dog', 'cat', 'dog'], function (item) { return item === 'dog' })).toEqual(['dog', 'dog']);
    });

    it('should handle an empty array as input', function () {
        expect(filter([], function (item) { return item > 1 })).toEqual([]);
    });

    it('should handle not passing a function', function () {
        expect(filter([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle a function that does nothing', function () {
        expect(filter([1, 2, 3], function (item) {})).toEqual([])
    })
});



