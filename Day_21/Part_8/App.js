//Array Methods
let arr = [1,2,3,4,5];

/* The code is using the `forEach` method on the `arr` array to iterate over each element in the array
and log each element to the console. */
arr.forEach((el) => {
        console.log(el);
})


arr.forEach(function(el) {
        console.log(el);        
});


// let print = function (el){
//         console.log(el);
// };

// arr.forEach(print);