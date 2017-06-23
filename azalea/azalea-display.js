var failures = 0;
var numberOfTests = 0;
var errorMessage;

function error(errorMessage) {
  test.innerHTML += `<p class='fail'>${errorMessage}</p>`
};

function runErrorProcess() {
  failures++;
  error(errorMessage);
  var list = test.getElementsByTagName("LI")
  list[list.length - 1].className = "fail";
};

function describe(testHeading, func) {
  document
  .getElementById("test")
  .innerHTML += `<h3>${testHeading}</h3>`;
  func();
  testCounter();
};

function it(description, block) {
  try {
    numberOfTests++;
    document
    .getElementById("test")
    .innerHTML += `<li>${description}</li>`;
    block();
  } catch(error) {
    errorMessage = `- ${error.stack}`
    runErrorProcess();
  };
};

function testCounter() {
  var fails;
  var color;
  failures === 1 ? fails = 'failure' : fails = 'failures';
  failures ? color = 'red' : color = '#00cc00';
  document
  .getElementById("test-report")
  .innerHTML = `<span style="color:${color}">${numberOfTests} tests, ${failures} ${fails}</span>`;
};
