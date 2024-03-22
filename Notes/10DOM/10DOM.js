// DOM Manipulations

// 4 Pillars of DOM

// 1. Element Selection

// var a = document.querySelector("h1");
// console.log(a);

// // Output = <h1>
// // Check the Console for the JavaScript Output 
// // </h1>

// 2. Changing HTML

// var a = document.querySelector("h1");
// a.innerHTML = "Changed H1";

// 3. Changing CSS

// var a = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor =  "azure";


// 4. Event Listeners

// var a = document.querySelector("h1");
// a.addEventListener("click", function(){
//     console.log("What Up?");
// });

// 2nd Example

// var a = document.querySelector("h1");
// a.addEventListener("click", function(){
//     a.innerHTML = "What Up?";
//     a.style.color = "Magenta";
// });


// Adding Multiple Events 


// USE document.querySelectorAll() to use multiple HTML tags at once 
// Then use xyz.forEach(function(e){
//     console.log("target");
// })

// ex -->

// var a  = document.querySelectorAll("h1");
// a.forEach(function(e)
// {
//   console.log(e);
// }
//     )


//document.getElementById() and document.getElementByClass() are equivalent to document.querySelector()
