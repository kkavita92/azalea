var failures = 0;
var numberOfTests = 0;

function expect(testvalue) {

  var test = document.getElementById("test");
  var errorMessage;

  function toEqual(actualvalue) {
    if(testvalue !== actualvalue) {
      failures++;
      errorMessage = ` - Expected "${testvalue}" to equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toNotEqual(actualvalue) {
    if(testvalue == actualvalue) {
      failures++;
      errorMessage = ` - Expected "${testvalue}" to not equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toContain(actualvalue) {
    if(!testvalue.includes(actualvalue)) {
      failures++;
      errorMessage = ` - Expected ${testvalue} to contain ${actualvalue}.`
      runErrorProcess();
    };
  };

  function toBeDefined() {
    if(void 0 == testvalue) {
      failures++;
      errorMessage = ` - Expected ${testvalue} to be defined.`
      runErrorProcess();
    };
  };


  function error(errorMessage) {
    test.innerHTML += `<p class='fail'>${errorMessage}</p>`
  };

  function runErrorProcess() {
    error(errorMessage);
    var list = test.getElementsByTagName("LI")
    list[list.length - 1].className = "fail";
  };

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toContain: toContain,
    toBeDefined: toBeDefined
  }

};
