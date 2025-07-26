// // [2,4,6].every((el) => el%2 == 0);
// // true

// // [2,4,6,8].every((el) => el%2 == 0);
// // true

// // [2,4,6,8,1].every((el) => el%2 == 0);
// // false

// // [3,5,7,9,11].every((el) => el%2 == 0);
// // false

// // [3,5,7,9,11].every((el) => el%2 != 0);
// // true



// // Reduce method or function 

// // let nums2 = [1,2,3,4];
// // let finalVal = nums2.reduce((res, el) => res + el);
// // console.log(finalVal);





// // find maximum number

// // let arr = [1,4,2,5,6,7,9,2];

// // let max = -1;
// // for(let i = 0; i< arr.lenght; i++){
// //         if (max < arr[i]) {
// //                 max = arr[i];
                
// //         }
// // }
// // console.log(max);

// // now using reduce menthod

// // let max = arr.reduce((max, el ) =>{
// //         if(max < el){
// //                 return el;
// //         }else{
// //                 return max;
// //         }
// // });
// // console.log(max);




// // Que: Finding Maximum in an array

// let max = arr.reduce((max, el) => {
//         if(max <el){
//                 return el;
//         }else{
//                 return max;
//         }
// });
// console.log(max); 

//   let a = 3;
//   console.log(a);  





// Practice Ques1
// Check if all numbers in our array are multiple fo 10 or not.

let nums = [10,20,30,40];

let ans = nums.every((el) => el %10 == 0 );
console.log(ans);






function getMin(nums2){
        let min = nums2.reduce((min, el) =>{
                if(min>el){
                        return min;

                }else{
                        return el;
                }
        });
        return min;
}

let nums2 = [10,20,30,40,5]