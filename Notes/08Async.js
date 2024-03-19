// First high level Js Function Architecture concept

// We use callbacks here

// What async means?

// answer --> something that isn't in a pattern like sync function and happens in part
// also means we do many things at once 

// sync js example 
// console.log("Step 1");
// console.log("Step 2");


// async js example

// setTimeout(() => {
//     console.log("This will be printed later");
// }, 3000);
// console.log("This will be printed first");



// example for async function, this counts 1-100 summing all along still prints "This Works!" first 


// function sum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     console.log(sum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("This Works!");


//3rd example for async function


// const fs = require("fs");
// // fs= file system
// fs.readFile("async.txt" , "utf8" , function (err, data) {
//     console.log(data);
// });
// console.log("Hi Broo");

// // Output : Hi Broo

// // Hi there from async.txt file

// why this happened is because fs is also an async function 


