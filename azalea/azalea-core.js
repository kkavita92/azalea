function expect(testvalue) {

  var test = document.getElementById("test");

  function toEqual(actualvalue) {
    if(testvalue !== actualvalue) {
      errorMessage = ` - Expected "${testvalue}" to equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toNotEqual(actualvalue) {
    if(testvalue == actualvalue) {
      errorMessage = ` - Expected "${testvalue}" to not equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toContain(actualvalue) {
    if(!testvalue.includes(actualvalue)) {
      errorMessage = ` - Expected ${testvalue} to contain ${actualvalue}.`
      runErrorProcess();
    };
  };

  function toBeDefined() {
    if(void 0 == testvalue) {
      errorMessage = ` - Expected ${testvalue} to be defined.`
      runErrorProcess();
    };
  };

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toContain: toContain,
    toBeDefined: toBeDefined
  }

};
