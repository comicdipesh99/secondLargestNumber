"use strict"



// console.log(b);
// let b=20;


// *************Largest Number***********

// let arr=[1,2,3,4,5,6,7,8,9];
// let largestNumber=arr[0];

// for (let i=0; i<arr.length; i++){
//     if(largestNumber<arr[i]){
//         largestNumber=arr[i];
//     }
// }
// console.log(largestNumber)

// **********************find lagest number using function 

// function largestNumber(arr=[]){

// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);
// }
// largestNumber([1,2,3,4,5,6,7,8,9])
// largestNumber([1,2])
// largestNumber([2,3,4,5])
// largestNumber([455,695,1,23,55])
// largestNumber([-1,2,4,0])


// *************************second largest number

function secondLargest(arr) {

    let largestNumber = arr[0];
    let secondLargestNumber = 0;
  
    for(let i=0; i<arr.length; i++) {
      if(arr[i] > largestNumber) {
          secondLargestNumber = largestNumber;
        largestNumber = arr[i];
      } else if(arr[i] > secondLargestNumber && arr[i] !== largestNumber) {
  
        secondLargestNumber = arr[i];
      }
   }
   return secondLargestNumber;
  
  }
  
  console.log(secondLargest([1,2,3,4,5,6,7,8,9]));
  console.log(secondLargest([1,2]))
  console.log(secondLargest([2,3,4,5]))
  console.log(secondLargest([455,695,1,23,55]))
  console.log(secondLargest([-1,2,4,0]))