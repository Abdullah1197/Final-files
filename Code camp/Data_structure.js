// Data Structure 
// 1
// let yourArray =["Abdullah", 20, "Male", false, 1999]; // change this line

// 2
// let myArray = ["a", "b", "c", "d"];
// // change code below this line
// myArray[1] = "f";
// //change code above this line
// console.log(myArray);

// 3
// function mixedNumbers(arr) {
//     // change code below this line
//     arr.unshift("I", 2, "three"); // to add at the beggining 
//     arr.push(7, "VIII", 9); // to add at the end of the array.
//     // change code above this line
//     return arr;
//   }
//   // do not change code below this line
//   console.log(mixedNumbers(['IV', 5, 'six']));
  
// 4
// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
//   }
//   // do not change code below this line
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));
  
// 5
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // only change code below this line
// arr.splice(1, 4);
// // only change code above this line
// console.log(arr);

// 6
// function htmlColorNames(arr) {
//     // change code below this line
//     arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
//     // change code above this line
//     return arr;
//   }
//   // do not change code below this line
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
  
// 7
// function forecast(arr) {
//     // change code below this line
//     return arr.slice(2, 4);
//     return arr;
//   }
//   // do not change code below this line
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  
// 8
// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // change code below this line
//       newArr.push([...arr]);
//       // change code above this line
//       num--;
//     }
//     return newArr;
//   }
//   // change code here to test different cases:
//   console.log(copyMachine([true, false, true], 2));
  
// 9
// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ["learning" , ...fragment, "is", "fun"]; // change this line
//     return sentence;
//   }
//   // do not change code below this line
//   console.log(spreadOut());
  
// 10
// function quickCheck(arr, elem) {
//     // change code below this line
//     return arr.indexOf(elem) >= 0 ? true : false;
//     // change code above this line
//   }
//     // change code here to test different cases:
//   console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 11
// function filteredArray(arr, elem) {
//     let newArr = [];
//     // change code below this line
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i].indexOf(elem) == -1) {
//         newArr.push(arr[i]);
//       }
//     }
//     // change code above this line
//     return newArr;
//   }
//   // change code here to test different cases:
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
// 12
// let myNestedArray = [
//     // change code below this line
//   ["unshift", false, 1, 2, 3, "complex", "nested"],
//     ["loop", "shift", 6, 7, 1000, "method"],
//     ["concat", false, true, "spread", "array", ["deep"]],
//     ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//     ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]  // change code above this line
//   ];
  
// 13
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };
//   // change code below this line
//   foods["bananas"] = 13;
//   foods["grapes"] = 35;
//   foods["strawberries"] = 27;
//   // change code above this line
//   console.log(foods);
  
// 14
// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
//   };
//   // change code below this line
//   userActivity.data.online = 45;
//   // change code above this line
//     console.log(userActivity);
  
// 15
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   // do not change code above this line
//   function checkInventory(scannedItem) {
//     // change code below this line
//     return foods[scannedItem];
//   }
//   // change code below this line to test different cases:
//   console.log(checkInventory("apples"));
  
// 16
// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   // change code below this line
//   delete foods.oranges;
//   delete foods.strawberries;
//   delete foods.plums;
//   // change code above this line
//   console.log(foods);
  
// 17
// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(obj) {
//     // change code below this line
//   if (
//       obj.hasOwnProperty("Alan") &&
//       obj.hasOwnProperty("Jeff") &&
//       obj.hasOwnProperty("Sarah") &&
//       obj.hasOwnProperty("Ryan")
//     ) {
//       return true;
//     }
//     return false;
//     // change code above this line
//   }
//     console.log(isEveryoneHere(users));
  
// 18
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
//   function countOnline(obj) {
//     // change code below this line
//     let result = 0;
//     for (let user in obj) {
//       if (obj[user].online === true) {
//         result++;
//       }
//     }
//     return result;
//     // change code above this line
//   }
//   console.log(countOnline(users));

// 19
// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
//   function getArrayOfUsers(obj) {
//     // change code below this line
//   return Object.keys(obj);  
//   // change code above this line
//   }
//   console.log(getArrayOfUsers(users));
  
// 20
// let user = {
//     name: 'Kenneth',
//     age: 28,
//     data: {
//       username: 'kennethCodesAllDay',
//       joinDate: 'March 26, 2016',
//       organization: 'freeCodeCamp',
//       friends: [
//         'Sam',
//         'Kira',
//         'Tomo'
//       ],
//       location: {
//         city: 'San Francisco',
//         state: 'CA',
//         country: 'USA'
//       }
//     }
//   };
//   function addFriend(userObj, friend) {
//     // change code below this line
//   userObj.data.friends.push(friend);
//     return userObj.data.friends;
//     // change code above this line
//   }
//   console.log(addFriend(user, 'Pete'));
  