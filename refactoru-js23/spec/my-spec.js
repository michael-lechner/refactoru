describe("splice", function() {
  it("should be able to remove elements from an array", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });

  it("original array should remain unchanged", function(){
    var a = ['a','b','c','d','e'];
    splice(a, 2, 2);
    expect(a).toEqual(['a','b','c','d','e']);
  });

  it("should insert an item with the fourth argument", function () {
    expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });

  it("you can insert elements without removing anything", function () {
    expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });

  it("Inserting at an arbitrarily high index should just insert at the end", function () {
    expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
    expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
  });

  it("You should be able to insert an arbitrary number of values using multiple arguments", function () {
    expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
    expect(splice(['a','b','c'], 1, 1, 'x','y','z')).toEqual(['a','x','y', 'z','c']);
  });

});