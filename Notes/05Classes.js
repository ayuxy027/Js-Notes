// class can help create a template which can be used to render individual templates data 

// this describes the arguments to the template 


// ex-- 


// class Animals {
//     constructor(names, legs, speaks) {
//       this.names = names;
//       this.legs = legs;
//       this.speaks = speaks;
//     }
    
//     speak() {
//       console.log("Hi there " + this.speaks);
//     }
//   }
  
  // let dog = {
  //     name : 'Dog',
  //     legs : 4,
  //     speaks :'bhow bhow',
  // }  WRONG WAY xXxXxXxXxXxXxXxXxXxX
  
//   let dog = new Animals("dog", 4, "bhow bhow"); // create object
//   let cat = new Animals("cat", 4, "meow meow");
//   cat.speak(); //  call the function on object

//   Result : Hi there meow meow (open console)
  

// To add more we can add more paramenters in Construct function


// another example 

// class Animals {
//   constructor(name, legs, sound, breed) {
//       this.name = name;
//       this.legs = legs;
//       this.sound = sound;
//       this.breed = breed;
//   }
//   makeSound() { // Changed the method name to makeSound
//       console.log("You Speak " + this.sound);
//   }
// }

// let dog = new Animals('doggie', 4, "bhow bhow", "German Shepherd"); // Corrected the instantiation
// dog.makeSound(); // Changed the method call to makeSound




// Date Class 

// const date = new Date();
// console.log(
//   "Day: " + date.getDate(),
//   "Month: " + (date.getMonth() + 1),
//   "Year: " + date.getFullYear(),
//   "Hours: " + date.getHours(),
//   "Minutes: " + date.getMinutes()
// );
