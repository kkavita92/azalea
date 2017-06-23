function expect(testvalue) {

  var test = document.getElementById("test");
  var errorMessage;

  function toEqual(actualvalue) {
    if(testvalue !== actualvalue) {
      errorMessage = ` - Expected "${testvalue}" to equal "${actualvalue}".`;
      runErrorProcess(errorMessage);
    };
  };

  function toNotEqual(actualvalue) {
    if(testvalue == actualvalue) {
      errorMessage = ` - Expected "${testvalue}" to not equal "${actualvalue}".`;
      runErrorProcess(errorMessage);
    };
  };

  function toContain(actualvalue) {
    if(!testvalue.includes(actualvalue)) {
      errorMessage = ` - Expected ${testvalue} to contain ${actualvalue}.`
      runErrorProcess(errorMessage);
    };
  };

  function toBeDefined() {
    if(void 0 == testvalue) {
      errorMessage = ` - Expected ${testvalue} to be defined.`
      runErrorProcess(errorMessage);
    };
  };

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toContain: toContain,
    toBeDefined: toBeDefined
  }

};

function Iggy(object, method, returnvalue) {
  object[method] = function() {
    return returnvalue
  }

}
