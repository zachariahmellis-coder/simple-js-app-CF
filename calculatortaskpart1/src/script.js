// a function with a return statement

function add(number1, number2){
  return number1 + number2;
}
let result1 = add(6, 8)
console.log(result1);

function subtract(number1, number2){
  return number1 - number2;
}
let result2 = subtract(26, 51)
console.log(result2);

function multiply(number1, number2) {
  return number1 * number2;
}
let result3 = multiply(12, 78);
console.log(result3);

function divide(dividend, divisor){
  if(divisor === 0){
    return "No Allowed :("
  }else{
    let result = dividend / divisor;
    return result;
  }
}
console.log(divide(4, 2));