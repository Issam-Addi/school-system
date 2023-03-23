/* 5- Write a function that, takes an array of integers as input, iterates over the array,
and returns a new array.The returned array should contain the result of raising 2 to the power
of the original input element.For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
*/

//////// A //////////
// let arr = [1, 2, 3,];
// let newArr = arr.map ((value)=> Math.pow(value, 2))
// console.log(newArr);

//////// B //////////
// let arr = [1, 2, 3,];
// let newArr = arr.map ((value)=> value * 2);
// console.log(newArr);
//**************************************************************************************


/* 6- Write a function that, takes an array of numbers as input, uses map to return a new array
where each element is either the string "even" or the string "odd", based on each value.
If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].
*/

// let arr = [1, 2, 3, "Essam", "Hisham", 5, 8];
// let newArr = arr.map ((value)=>{
//     if (typeof value != "number") 
//         return "N/A";
//     else 
//         return value % 2 === 0 ? "Even" : "Odd";
// })
// console.log(newArr);
//**************************************************************************************


/* 7- Write a function named fizzbuzz that takes in an array of numbers.
Iterate over the array using forEach or map to determine the output based on several rules:
    - If a number is divisible by 3, add the word "Fizz" to the output array.
    - If the number is divisible by 5, add the word "Buzz" to the output array.
    - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
    - Otherwise, add the number to the output array.
Return the resulting output array.
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function fizzbuzz(arr) {
//     let newArr = arr.map ((value)=>{
//         if (value % 3 === 0 && value % 5 === 0)
//             return `FizzBuzz"`;
//         else if (value % 3 === 0)
//             return `Fizz`;
//         else if (value % 5 === 0)
//             return `Buzz`;
//         else
//             return `It is not divisible by 3 and 5`;
//     })
//     return newArr;
// }

// console.log(fizzbuzz(arr))