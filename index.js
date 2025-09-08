// 1. A function that receives another function and calls it
function receivesAFunction(callback) {
  callback(); // just call it
}

// 2. A function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    return "I am a named function!";
  };
}

// 3. A function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return () => "I am an anonymous function!";
}
