function expect(testvalue) {

  var test = document.getElementById("test");
  var errorMessage;

  function toBe(actualvalue) {
    if(testvalue !== actualvalue) {
      errorMessage = ` - Expected "${testvalue}" to be "${actualvalue}".`;
      runErrorProcess(errorMessage);
    };
  };

  function toEqual(actualvalue) {
    if(testvalue != actualvalue) {
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
    if(testvalue == void 0) {
      errorMessage = ` - Expected ${testvalue} to be defined.`
      runErrorProcess(errorMessage);
    };
  };

  function toBeNull() {
    if(null !== testvalue) {
      errorMessage = ` - Expected ${testvalue} to be null.`
      runErrorProcess(errorMessage);
    };
  };

  return {
    toBe: toBe,
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toContain: toContain,
    toBeDefined: toBeDefined,
    toBeNull: toBeNull
  }

};

// Spies

function Iggy(object, method) {

  function andReturn(returnvalue) {
    object[method] = function() {
      return returnvalue
    };
  };

  return {
    andReturn: andReturn
  };

};
