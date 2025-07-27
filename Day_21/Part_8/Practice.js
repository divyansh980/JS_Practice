/* Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.  */

let nums = [1,2,3,4,5,6,7,8];
const square = nums.map((num) => num * num);
console.log(square);  //(8) [1, 4, 9, 16, 25, 36, 49, 64]

let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);   ///25.5




/* Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5. */


let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((numbers) => numbers + 5));




/**Qs3. Create a new array whose elements are in uppercase of words present in the
original array. */

let string = ["admin","divyash","bob","catlyn","eve"];
console.log(string.map((string) => string.toUpperCase()));



/**Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled. */

const doubleAndReturn = (arr, ...args) => [
        ...args,
        ...args.map((v) => v * 2),
];

doubleAndReturn([1,2,3],4,4);  //(4) [4, 4, 8, 8]
doubleAndReturn([2],10,4); //(4) [10, 4, 20, 8]



/**Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object. */

const mergeObj = (obj1, obj2) => ({...obj1,...obj2});
mergeObj({a:1,b:2},{c:3,d:4}); //{a: 1, b: 2, c: 3, d: 4}