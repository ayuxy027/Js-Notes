// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()

// push ---> adds a new element to the array from the end of the array


// const initialArray = [1, 2, 3, 4, 5];
// initialArray.push(2);
// console.log(initialArray);

// // output is [ 1, 2, 3, 4, 5, 2 ]


//pop ---> removes the element from the array from the end of the array


// const initialArray = [1, 2, 3, 4, 5];
// initialArray.pop();
// console.log(initialArray);

// // Output is [ 1, 2, 3, 4]

//shift ---> removes the element from the array from the start of the array

// const initialArray = [1, 2, 3, 4, 5];
// initialArray.shift();
// console.log(initialArray);

// similarly unshift() adds from start 

// const initialArray = [1, 2, 3, 4, 5];
// initialArray.unshift("abc");
// console.log(initialArray);


//concat() ---> to merge 2 arays 


// const initialArray = [1, 2, 3, 4, 5];
// const secondArray = [6,7,8,9,10];
// console.log(initialArray.concat(secondArray));


// forEach() ---> to perform on an operation on each element

//  const initialArray = [1, 2, 3, 4, 5];

//  function logThing(str){
//     console.log(str + ' this is a string');
//  }
//  initialArray.forEach(logThing); 
