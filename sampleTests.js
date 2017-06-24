var Thing = function() {};

var ObjectUnderTest = function() {}
ObjectUnderTest.prototype.sayhello= function () {
  return 'hello';
};

ObjectUnderTest.prototype.saybye = function () {
  return 'bye';
};

describe('Sample Tests', function() {
  it('checks to toBeDefined matcher', function() {
    var thing = new Thing();
    expect(thing).toBeDefined();
  });

  it('checks toEqual matcher', function() {
    expect(3).toEqual("3");
  });

  it('checks toBe matcher', function() {
    expect(3).toBe(3);
  });

  it('checks toContain matcher', function() {
    expect([1,2,"3"]).toContain("3");
  });

  it('checks toBeNull matcher', function() {
    expect(null).toBeNull();
  });

  it('checks if spy is working', function() {
    Iggy(ObjectUnderTest, 'sayhello').andReturn('hello')
    expect(ObjectUnderTest.sayhello()).toEqual('hello');
  });


});
