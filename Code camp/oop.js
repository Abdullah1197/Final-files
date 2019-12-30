// Object oriented programming
// 1
// let dog = {
//     name: "Alex",
//     numLegs: 4
//     };
    
// 2
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Add your code below this line
//   console.log(dog.name, dog.numLegs);

// 3
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: () => {
//       return "This dog has " + dog.numLegs + " legs" + ".";
//     }
//   };
//     console.log(dog.sayLegs());
  
// 4
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
  
//   console.log(dog.sayLegs());
  
// 5
// function Dog() {
//     (this.name = "Geogre"), (this.color = "White"), (this.numLegs = 4);
//   }

// 6
// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Add your code below this line
//   let hound = new Dog();
//   console.log(hound);

// 7
// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
//     }
//     let terrier = new Dog("Alen", "Black");
    
// 8
/* jshint expr: true */

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
//   }
  
//   // Add your code below this line
//   let myHouse = new House(9);
//   myHouse instanceof House;
//   console.log(myHouse);
  
// 9
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Add your code below this line
//   for(let property in canary){
//     if (canary.hasOwnProperty(property)) {
//       ownProps.push(property);
//     }
//   }
//   console.log(canary);
  
// 10
// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   console.log(Dog);
//   // Add your code above this line
//   let beagle = new Dog("Snoopy");
//   console.log(beagle);
  
// 11
// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype.numLegs = 4;
  
//   let beagle = new Dog("Snoopy");
  
//   let ownProps = [];
//   let prototypeProps = [];
  
//   // Add your code below this line
//   for (let property in beagle) {
//     if (Dog.hasOwnProperty(property)) {
//       ownProps.push(property);
//     } else {
//       prototypeProps.push(property);
//     }
//   }

// 12
// function Dog(name) {
//     this.name = name;
//   }
//     // Add your code below this line
//   function joinDogFraternity(candidate) {
//   if(candidate.constructor === Dog){
//     return true;
//   } else {
//     return false;
//   }
//   }
  
// 13
// function Dog(name) {
//     this.name = name;
//   }
  
//   Dog.prototype = {
//     // Add your code below this line
//   numLegs: 2,
//     eat() {
//       console.log("nom nom nom");
//     },
//     describe() {
//       console.log("My name is " + this.name);
//     }
//   };
  
// 14
// function Dog(name) {
//     this.name = name;
//   }
  
//   // Modify the code below this line
//   Dog.prototype = {
//   constructor: Dog,
//     numLegs: 4,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
//   };
  
// 15
// function Dog(name) {
//     this.name = name;
//   }
//   let beagle = new Dog("Snoopy");
//   // Add your code below this line
//   Dog.prototype.isPrototypeOf(beagle);
  
// 16
// function Dog(name) {
//     this.name = name;
//   }
//   let beagle = new Dog("Snoopy");
//   Dog.prototype.isPrototypeOf(beagle);  // => true
//   // Fix the code below so that it evaluates to true
//   Object.prototype.isPrototypeOf(Dog.prototype);
  
// 17
// function Cat(name) {
//     this.name = name;
//   }
//   Cat.prototype = {
//     constructor: Cat
//   };
//   function Bear(name) {
//     this.name = name;
//   }
//   Bear.prototype = {
//     constructor: Bear
//   };
//   function Animal() {}
//   Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//       console.log("nom nom nom");
//     }
//   };

// 18
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Add your code below this line
// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line

// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom"

// 19
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// function Dog() { }
// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();
// beagle.eat();  // Should print "nom nom nom"

// 20
// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Add your code below this line

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// 21
// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof woof!");
// };
// // Add your code above this line

// let beagle = new Dog();

// beagle.eat(); // Should print "nom nom nom"
// beagle.bark(); // Should print "Woof!"

// 21
// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Add your code below this line
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };
// // Add your code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

// 22
// let bird = {
//     name: "Donald",
//     numLegs: 2
//   };
  
//   let boat = {
//     name: "Warrior",
//     type: "race-boat"
//   };
  
//   // Add your code below this line
//   let glideMixin = function(obj) {
//     obj.glide = function() {
//       console.log("Gliding!");
//     };
//   };
//   glideMixin(bird);
//   glideMixin(boat);

// 23
// function Bird() {
//     let weight = 15;
//     this.getWeight = () => weight;  
//
//   }

// 24
// (function() {
//     console.log("A cozy nest is ready");
//   })();

// 25
// let funModule = ( () => {
//     return {
//       isCuteMixin: (obj) => {
//         obj.isCute = () => { true; };
//       },
//       singMixin: (obj) => {
//         obj.sing = () => { console.log("Singing to an awesome tune"); 
//         }
//       }
//     }
//   })();

