
var spec = function(message, testFunc) {
  try {
    testFunc();
    console.log('%c Success ' + message, 'color: #3CB371' )
  } catch(err) {
    console.error("%c Failure " + message + err, 'color: #B22222')
    console.trace('The Trace');
  }
}


var expectEquality = function (returnValue, expected) {
  if(returnValue != expected) {
    throw {type: "Fail", details: {actual: returnValue, expected: expected}};
  } else {
    console.log("Success", {type: "Test passed", details: {actual: returnValue, expected: expected}});
  }
};

var expectInequality = function (returnValue, expected) {
  if(returnValue === expected) {
    throw {type: "Fail", details: {actual: returnValue, expected: expected}};
  } else {
    console.log("Success", {type: "Test passed", details: {actual: returnValue, expected: expected}});
  }
};

var errorCheck = function(testFunc) {
  var pass = false
  try {
    testFunc()
  } catch(error) {
      console.error(error.message)
      pass = true
  } finally {
      if(pass === true ){
      console.log(pass, {type: "Test passed"})
    } else {
      throw {type: "Fail"}
    }
  };
};

var responseCheck = function (testFunc) {
  var pass = true
  try {
    testFunc()
  } catch(error) {
    console.error(error.message)
    pass = false
  } finally {
    if(pass === true ){
    console.log(pass, {type: "Test passed"})
  } else {
    throw {type: "Fail"}
  }
};
};
