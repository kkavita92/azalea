var Thing = function() {};

describe('Sample Tests', function() {
  it('can pick up definition errors', function() {
    var thing = new Thing();
    expect(thing).toBeDefined();
  });

  it('can equalize for strings', function() {
    expect(3).toEqual(4);
  });
});
