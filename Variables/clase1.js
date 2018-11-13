
// Como declara las variables


var nombre = 'Erick';  // para las variables de tipo String se recomineda usar '' pero tambien se puede usar "" como en Java
var apellido = 'Rojas'
var edad = 28;

let value = 'apple';
let value2 = 4.1 + 4.3;
let value3 = 10 / 0;
let value4 = -10 / 0;
let value5 = 0 / 0;
let booleanType = false;
let calculateSellsTax = true;

console.log('Hello World')
console.log('Hola ' + nombre + ' ' + apellido);
console.log(nombre + ' tiene ' + 28);

// Type basics

console.log(typeof(value));
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);

// Boolean types
console.log(booleanType);
console.log(typeof(calculateSellsTax), calculateSellsTax);

//undefined and null
/*
   *** Undefined***
   * JavaScript will initialize variables to undefined
   * We dont assign undefined to variables

   *** null ***
   Our source code should set variables to null if needed
*/

let undefinedValue;
nullValue = null;
console.log(undefinedValue);
console.log(undefinedValue, typeof(undefinedValue));
console.log(nullValue, typeof(nullValue));

/* Storing Multiple values in Arrays

/*
  * Create an Arrays

  let values = [];
  let values = [1, 2, 3];
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
  console.log(values[3]);
*/

let valuesArray = [1, 2, 3];
console.log(valuesArray[0]);
console.log(valuesArray[1]);
console.log(valuesArray[2]);
console.log(valuesArray[3]);
console.log(valuesArray.length);

let cities = ['New York', 'Los Angeles', 'Chicago']
console.log(cities);

let arrayValues = [];

arrayValues.push(44);
arrayValues.push(45);
arrayValues.push(46);

console.log(arrayValues);

let arrValues = [1, 2, 3];
let result = arrValues.pop();

arrValues.pop();
console.log(arrValues);
console.log(result);
