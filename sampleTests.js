var Thing = function() {};

describe('Sample Tests', function() {
  it('can pick up definition errors', function() {
    var thing = new Thing();
    expect(thing).toBeDefined();
  });

  it('can equalize for strings', function() {
    expect(3).toEqual(3);
  });

  it('checks Contain matcher', function() {
    expect([1,2,"3"]).toContain("3");
  });

  it('checks Contain matcher', function() {
    var ObjectUnderTest = function() {}
    ObjectUnderTest.prototype.sayhello= function () {
      return 'hello'
    };
    Iggy(ObjectUnderTest, 'sayhello', 'hello')
    expect(ObjectUnderTest.sayhello()).toEqual('hello');
  });

});
