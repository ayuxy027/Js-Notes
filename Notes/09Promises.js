// Promises and Async Await Syntax

// Using Promises we can create async functions of our own in a clean format 
 
// Promises don't use callback functions directly, but use them in the backend

// How to initialise a promise -->

// const d = new Promise(function (resolve, reject) {

// });

//     console.log(d)

//     output = Promise { <pending> }

// Why pending?
// because onDone is not called yet

// Promises have 3 types of outputs --> pending resolved and rejected


const d = new Promise(function (resolve, reject)
 {
    setTimeout(function ()
    {
        resolve("Hi there")
    } ,3000 )
 }
);
function callback()
{
    console.log(d);
}
d.then(callback)

// We can further get rid of .then and callback methods using 
// Async and Await Syntax in promises