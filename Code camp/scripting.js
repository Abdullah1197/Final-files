// Basic data structure scripting

// 1
// function convertToF(celsius) {
//     let fahrenheit;
//     return (celsius * 9/5 + 32);
//   }
//   console.log(convertToF(30));
//   console.log(convertToF(0));
//   console.log(convertToF(-30));
//   console.log(convertToF(-10));
//   console.log(convertToF(20));
//   console.log(convertToF(30));
  
// 2
// function reverseString(str) {
//     return str
//     .split("")
//     .reverse()
//     .join("");
//   }
//   console.log(reverseString("hello"));
//   console.log(reverseString("Howdy"));
//   console.log(reverseString("Greetings from Earth"));
  
// 3
// function factorialize(num) {
//     for (var product = 1; num > 0; num--) {
//      product *= num;
//    }
//    return product;
//  }
//  console.log(factorialize(5));
//  console.log(factorialize(10));
//  console.log(factorialize(20));
//  console.log(factorialize(0));
 
// 4
// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map(word => word.length));
//   }
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWordLength("May the force be with you"));
//   console.log(findLongestWordLength("Google do a barrel roll"));
//   console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
//   console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
  
// 5
// function largestOfFour(arr) {
//     // You can do this!
//       return arr.map(Function.apply.bind(Math.max, null));
//     return arr;
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
// 6
// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     return str.slice(str.length - target.length) === target;
//   }
  
//   confirmEnding("Bastian", "n");
  
// 7
// function repeatStringNumTimes(str, num) {
//     return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
//   }
  
// 8
// function truncateString(str, num) {
//     // Clear out that junk in your trunk
//   if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//     }  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
  
// 9
// function findElement(arr, func) {
//     let num = 0;
//     return arr.find(func);
//   }  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);
  
// 10
// function booWho(bool) {
//     // What is the new fad diet for ghost developers? The Boolean.
//     return typeof bool === "boolean";
//   }
//   console.log(booWho(true));
//   console.log(booWho(false));
//   console.log(booWho([].slice));
//   console.log(booWho(null));
  
// 11
// function titleCase(str) {
//     var convertToArray = str.toLowerCase().split(" ");
//     var result = convertToArray.map(function(val) {
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//     });
//     return result.join(" ");
//   }
  
//   titleCase("I'm a little tea pot");

// 12
// function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let localArray = arr2.slice();
//     for (let i = 0; i < arr1.length; i++) {
//       localArray.splice(n, 0, arr1[i]);
//       n++;
//     }
//     return localArray;
//   }
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
// 13
// function bouncer(arr) {
//     // Don't show a false ID to this bouncer.
//   let newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i]) newArray.push(arr[i]);
//     }
//     return newArray;
//   }
//   bouncer([7, "ate", "", false, 9]);
  
// 14
// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     arr.sort(function(a, b) {
//       return a - b;
//     });
  
//     var i = 0;
//     while (num > arr[i]) {
//       i++;
//     }
  
//     return i;
//   }
//   getIndexToIns([40, 60], 50);
  
// 15
// function mutation(arr) {
//     return arr[1]
//         .toLowerCase()
//         .split("")
//         .every(function(letter) {
//           return arr[0].toLowerCase().indexOf(letter) != -1;
//         });
//     }
//     mutation(["hello", "hey"]);
    
// 16
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//   var arr2 = [];
//     for (var i = 0; i < arr.length; i += size) {
//       arr2.push(arr.slice(i, i + size));
//     }
//     return arr2;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
  