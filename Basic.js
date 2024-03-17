// Module 1


// // console.log('Hi')
// const accountNumber = 98076
// let name = "Ayush"
// var accountPass ="Ghrcem"
// accountCity="Sydney"
// let accountState= "TA"

// console.table({ 
//     AccountNumber: accountNumber,
//     Name: name,
//     AccountPass: accountPass,
//     AccountCity: accountCity,
//     AccountState: accountState
// })



// Module 2



// str function start here 

// let str1 = "Hi____"
// let str2 = "Nodemon"
// str3 = str1+str2
// console.log(str3)



// Module 3



// increment operator

// using for operator

// let gameCounter=100
// for(;gameCounter<151;)
// {
//     ++gameCounter;
// console.log(gameCounter)
// }



// Module 4


// Js ka chutiyapa (why TS is needed)

// let number = 6;
// number = "hello";
// console.log(number)



// Module 5


// Js is a single threaded language i.e a Javascript code runs only on a single core rather than multiple cores at a single time.
// Ex. if we rent 20 computers on AWS only one computer will be used, leaading to wastage of 19 computers


// Module 6


// Js is an interpreted language

// console.log("Hi");
// console.log(a);

// let a =1;
// a=2;
// console.log(a);


// Module 7


// Variables ====> 
// let  const  var 

// Datatypes ===>
// string bigint int boolean double float

// Loops =====>
// for if else do while 


// Module 8 (exercises)


// Ex.1 Print Your Name by taking user input

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// console.log("Hi, " + firstName + " " + lastName);

// Ex.2 Greet user with respect to his/her Gender 

// var gender = prompt("Enter Your Gender").toLowerCase();
// var name = prompt("Enter your Name");
// if (gender=="male"){
//     console.log("Hi Sir" + name)
// }
// else {
//     console.log("Hi Miss" + name)
// }

// Ex.3 Print 1-100 Numbers using for Loop

// for ( let i=1; i<=100; i++) {
//    console.log(i);
// }

// Ex.4 Print Right Angle Triangle using *

// for (let i = 1; i <= 5; i++)
//  {
//     let side = '';
//     for (let j = 1; j <= i; j++) {
//         side += '*';
//     }
//     console.log(side);
//  }



// Module 9 


// Arrays 


// let person1 = 'John';
// let person2 = 'Jackson';
// let person3 = 'Jacob';

// const personArray = [person1, person2, person3]; ====> Correct Way 

// console.log(personArray);

// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);



// Module 10 (Exercises)


// Ex.1 Print only the even numbers of the array 

// let array = [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
// let x = array.length; 
// function assigned to a variable 
// for (let i = 0; i < x; i++)
// {
//     if(array[i] %2 ==0){
//         console.log(array[i])
//     }
// }

// Ex.2 Print Biggest No. of the Array

// let array = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

// let x = array.length;
// let max = array[0];

// for (let i = 0; i < x; i++)
//  {
//     if (array[i] > max)
//      {
//         max = array[i];
//     }
//  }
// console.log("The biggest number in the array is: " + max);
