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
 
