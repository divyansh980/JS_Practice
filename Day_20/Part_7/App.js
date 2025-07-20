// this keyword
/* This code defines an object named `student` with properties such as `name`, `age`, `eng`, `math`,
`phy`, and `chem`. It also includes a method `getAvg` within the object that calculates the average
of the `eng`, `math`, `phy`, and `chem` properties and logs the result to the console. The `this`
keyword is used to refer to the current object (`student`) within the `getAvg` method. */
const student ={
        name : "divyanhs",
        age : 21,
        eng : 85,
        math :75,
        phy :65,
        chem :98,

        getAvg (){
                let avg = (this.eng + this.math + this.phy + this.chem)/4;
                console.log(`${this.name} got avg marks = ${avg}`);
                
        }
}

function getAvg() {
        console.log(this);
        
}


// try & catch methods
let a = 12;
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
try {
        console.log(a);
} catch (e) {
        console.log("This in not defined")
        
}

console.log("Hello");
console.log("Hello");
console.log("Hello");
 




// Arrow Function

const sum = (a, b) =>{
        console.log(a + b);
}


// find the cube of n number using arrow function

/**
 * The function cube takes a number as input and returns the cube of that number.
 * @param n - The parameter `n` in the `cube` function represents the number that you want to calculate
 * the cube of.
 * @returns The cube of the input number `n` is being returned.
 */
const cube =(n) => {
        return n * n * n;
}



// Arrow Function - Implicit return 

/**
 * The function `mul` takes two parameters `a` and `b` and returns their product.
 * @param a - The parameter `a` is the first number that will be multiplied.
 * @param b - The parameter `b` in the `mul` function represents the second number that will be
 * multiplied with the first number `a`.
 */
const  mul  = (a ,b ) => (
        a *b
);



/* The code snippet you provided is using the `setTimeout` function in JavaScript. Here's what it does: */
// Set Timeout function 
console.log("Hi there");
setTimeout(() => {
        console.log("Divyansh Gupta")
}, 4000);
console.log("Welcome to home");


// Set Interval - function

/* The code `setInterval(() => { console.log("This is setInterval Function callback function") },
2000);` is setting up a recurring interval that will execute the callback function every 2000
milliseconds (2 seconds). */
// let id = setInterval(() => {
//       console.log("THis is setIterval Funtion callback function") ; 
// }, 2000);

console.log(id);


// let id2 = setInterval(() => {
//       console.log("Divyansh vishnu") ; 
// }, 3000);

console.log(id2);


// If i want to stop setInterval then we use "clearInterval(id)"

/* In the code snippet you provided: */

// this with Arrow function
 const student5 = {
        name : "Vishnu",
        marks : 87,        
        prop : this ,  // global scope
        getName : function (){
                console.log(this);
                return this.name;
        },
        getMarks : () => {
                console.log(this);  //parent's scope -> window
                return this.marks;
        },
        getInfo1 : function (){
                setTimeout(() => {
                        console.log(this)
                }, 2000);
        },
        getInfo2: function (){
                setTimeout(() => {
                        console.log(this); // window                        
                }, 2000);
        }
 }; 





//  practice question 

// Qus ->  Write a arrow function returns the square of a number 'n'.
 const sqaure = (n) => 
         n * n ;

 console.log(sqaure(4));
 
// Qus -> Write a function that print " Hello World" 5 times at intervals of 2s each.
let id4 = setInterval(() => {
        console.log("Hello world");

},2000);

setTimeout(() => {
        clearInterval(id3)
        console.log("clear interval ran")
}, 10000);