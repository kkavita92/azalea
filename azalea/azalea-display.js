function describe(testHeading, func) {
  document
  .getElementById("test")
  .innerHTML += `<h3>${testHeading}</h3>`;
  func();
  testCounter();
};

function it(description, block) {
  numberOfTests++;
  document
  .getElementById("test")
  .innerHTML += `<li>${description}</li>`;
  block();
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
