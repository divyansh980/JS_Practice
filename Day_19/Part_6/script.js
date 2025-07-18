// functions
// function click() {
//         console.log("HEllo");
        
// }

// function print1to5(){
//         for(let i =1 ; i<=5;i++){
//                 console.log(i);
//         }
// }


// practice que
// Create a Function to roll a dice & always display the value of the dice (1 to 6).



function rollDice() {
        let dice = Math.floor(Math.random() * 6 ) +1;
        console.log(`The Dice will come ${dice}`);
}
rollDice();

// Functions with arguments
        // Values we pass to the function

// function funName( arg1, arg2){
//        // do something
// }

function printName(name,age){
        console.log(name,`The age will be ${age}`);
        
}

printName("Divyansh",45);
printName("Raju");   //output : Raju The age will undefined


// practice ques
// Create a Funtion that gives us the average of 3 numbers.

function avgNum(a , b, c,d) {
        avg= a + b+ c + d / 3;
        console.log(`The average will be ${avg}`);

}

avgNum(10,10,10,10);


// Practice que to print a table
// Create a Function that prints the multiplication table of a number.


function printTable(num){
        for(let i = num; i <= num * 10 ; i+=num){
                let table = i / num;
                console.log(`${num} * ${table} = ${i}`)
        }
        
}

printTable(50);


// Question 
// PRint the sum of n numbers


function getSum(n){
        let sum = 0;
        for(let i= 1 ; i<=n; i++){
                sum += i;
        }
        return sum;
}


// Practice Question
// Create a function that returns the concatenation of all strings in an array.

let str = ["hi", "hello","bye","!"];

function concat (str){
        let result = "";
        for(let i = 0; i<str.length;i++){
                result += str[i];
        }
        return result;
}


// LExical Scope
 function outerFun(){
        let x = 29;
        let y = 44;

        function innerFun(){
                console.log(x);
        }
        innerFun();
 }


//  PRactice Question 
// What will be the output?

let greet = "Hello";  //Global scope

function changeGreet(){
        let greet = "ram ram ji";  //function scope
        console.log(greet);

        function innerGreet(){
                console.log(greet);  //lexical scope
                
        }

              
}
 console.log(greet);
changeGreet();




// HIgh order function

function muiltleGreet (func, count){
        for(let i = 1; i<=count;i++){
                func();
        }
}

let greet2 = function(){
        console.log("Divyansh");
}

muiltleGreet(greet2,10);