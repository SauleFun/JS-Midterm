/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
1. sum(a, b) - priima du skaičius ir grąžina jų sumą.
2. subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
3 multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
4. division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  //  sum of two numbers
  sum(a, b) {
    return a + b;
  }

  //  subtraction of two numbers
  subtraction(a, b) {
    return a - b;
  }

  //  multiplication of two numbers
  multiplication(a, b) {
    return a * b;
  }

  //  division of two numbers
  division(a, b) {
    return a / b;
  }
}

// kaip naudoti

const calculatorEx = new Calculator();

console.log("Sum:", calculatorEx.sum(11, 14));
console.log("Subtraction:", calculatorEx.subtraction(28, 17));
console.log("Multiplication:", calculatorEx.multiplication(5, 7));
console.log("Division:", calculatorEx.division(12, 6));
