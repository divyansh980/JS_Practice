// // // [2,4,6].every((el) => el%2 == 0);
// // // true

// // // [2,4,6,8].every((el) => el%2 == 0);
// // // true

// // // [2,4,6,8,1].every((el) => el%2 == 0);
// // // false

// // // [3,5,7,9,11].every((el) => el%2 == 0);
// // // false

// // // [3,5,7,9,11].every((el) => el%2 != 0);
// // // true



// // // Reduce method or function 

// // // let nums2 = [1,2,3,4];
// // // let finalVal = nums2.reduce((res, el) => res + el);
// // // console.log(finalVal);





// // // find maximum number

// // // let arr = [1,4,2,5,6,7,9,2];

// // // let max = -1;
// // // for(let i = 0; i< arr.lenght; i++){
// // //         if (max < arr[i]) {
// // //                 max = arr[i];
                
// // //         }
// // // }
// // // console.log(max);

// // // now using reduce menthod

// // // let max = arr.reduce((max, el ) =>{
// // //         if(max < el){
// // //                 return el;
// // //         }else{
// // //                 return max;
// // //         }
// // // });
// // // console.log(max);




// // // Que: Finding Maximum in an array

// // let max = arr.reduce((max, el) => {
// //         if(max <el){
// //                 return el;
// //         }else{
// //                 return max;
// //         }
// // });
// // console.log(max); 

// //   let a = 3;
// //   console.log(a);  





// // Practice Ques1
// // Check if all numbers in our array are multiple fo 10 or not.

// // let nums = [10,20,30,40];

// // let ans = nums.every((el) => el %10 == 0 );
// // console.log(ans);






// // function getMin(nums2){
// //         let min = nums2.reduce((min, el) =>{
// //                 if(min>el){
// //                         return min;

// //                 }else{
// //                         return el;
// //                 }
// //         });
// //         return min;
// // }

// // let nums2 = [10,20,30,40,5]




// //Default parameter

// // function sum(a = 2,b){
// //         return a + b;
// // }
// // sum(1,3);   // 4
// // sum(1);     //a = 1, b = undefined 



// //Spread mathod
// //  let arr = [1,2,4,5,6,65];
// //  Math.min(...arr);




// //  let div = [1,2,3,4,5,6];
// //  let newDiv = [...div];

// //  let namee = [..."gupta"];

// //  let odd = [1,3,5,7,9];
// //  let even = [2,4,6,8,10];

// //  let number = [...odd,...even];
// //   console.log(number);
 

// // const  data = {
// //         email : "ironman@gmail.com",
// //         pass : "abcd",
// // };

// // let dataCopy = {...data, id:123, country:"India"};


// // let arr = [1,2,3,4,5];  //val
// // let obj1 = {...arr};   //obj -> key:val

// // let obj2 = {..."hello"};


// // Rest method 

// function summer(...args){
//         //argument
//         for(let i = 0; i< args.length; i++){
//                 console.log("you gave us: ", args[i]);
//         }
        
// }

// function minn(a,b,c,d){
//         console.log(arguments);
// }


// function sum(...args){
//         return args.reduce((sum, el) => sum + el);
// }


// function min (...args){
//         console.log(msg);
//         return args.reduce((min,el) =>{
//                 if(min>el){
//                         return el;
//                 }else{
//                         return min;                
//                 }
//         });
// }

// // Destructuring

// let names= ["Divyansh","Gupta","tarun", "arun","hdshf","sdfs"];

// let [winner, runnerup,...others] = names;

// // console.log(winner,runnerup)



// Destructuring with objects

const detailsOfStudents = {
        name: "Divyansh",
        age:23,
        class:12,
        subjects:["MAth","English","Chemistry"],
        username:"divyansh123",
        password:"123"
};


let {username:user, password,city:place="GKP"} = detailsOfStudents;