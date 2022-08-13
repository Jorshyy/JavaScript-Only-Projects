const Calculate = {
  factorial(input) {
    for (let i = input - 1; i >= 1; i--) {
        input = input * i; 
      }
       
      return input;
  }
}

module.exports = Calculate;

