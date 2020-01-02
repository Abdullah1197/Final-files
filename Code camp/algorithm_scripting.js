// Algorithm scripting
// 1
// function sumAll(arr) {
//     var sum = 0;
//       for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         sum += i;
//       }
//       return sum;
//     }
//     console.log(sumAll([1, 4]));
//     console.log(sumAll([5, 10]));

// 2
// function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
//     function diff(a, b) {
//       return a.filter(item => b.indexOf(item) === -1);
//     }
//   }
//   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//   console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  
// 3
// function destroyer(arr) {
//     var args = Array.from(arguments).slice(1);
//       return arr.filter(function(val) {
//         return !args.includes(val);
//       });
//     }
//     console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//     console.log(destroyer([10, 11, 12, 13, 14], 11, 13));
    
// 4
// function whatIsInAName(collection, source) {

//     var srcKeys = Object.keys(source);
  
//     return collection.filter(function(obj) {
//       return srcKeys.every(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       });
//     });
//   }
//   // test here
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   );

// 5
// spinalCase('This Is Spinal Tap');
// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();
// }
// // test here
// spinalCase("This Is Spinal Tap");

// 6
// function translatePigLatin(str) {
//     return str
//             .replace(/^[aeiou]\w*/, "$&way")
//             .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//   }
  
//   // test here
//   console.log(translatePigLatin("consonant"));

// 7
// function myReplace(str, before, after) {
//     // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
//     if (/^[A-Z]/.test(before)) {
//       after = after[0].toUpperCase() + after.substr(1)
//     } else {
//       after = after[0].toLowerCase() + after.substr(1)
//     }
  
//     // return string with argument "before" replaced by argument "after" (with correct case)
//     return str.replace(before, after);
//   }
  
//   // test here
//   console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// // 8
// function myReplace(str, before, after) {
//   var index = str.indexOf(before);
//   if (str[index] === str[index].toUpperCase()) {
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   }
//   str = str.replace(before, after);
//   return str;
// }
// // test here
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 9
// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];
//   // Function to check with strand to pair.
//   var search = function(char) {
//     switch (char) {
//       case "A":
//         paired.push(["A", "T"]);
//         break;
//       case "T":
//         paired.push(["T", "A"]);
//         break;
//       case "C":
//         paired.push(["C", "G"]);
//         break;
//       case "G":
//         paired.push(["G", "C"]);
//         break;
//     }
//   };
//    // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }
//   return paired;
// }
// // test here
// console.log(pairElement("GCG"));
// console.log(pairElement("TAG"));

// 10
// function fearNotLetter(str) {
//   for (var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);
//     /* if code of current character is not equal to first character + no of iteration
//         hence character has been escaped */
//     if (code !== str.charCodeAt(0) + i) {
//       /* if current character has escaped one character find previous char and return */
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }
// // test here
// fearNotLetter("abce");

// 11
// function uniteUnique(arr1, arr2, arr3) {
//   // Creates an empty array to store our final result.
//   var finalArray = [];
//   // Loop through the arguments object to truly make the program work with two or more arrays
//   // instead of 3.
//   for (var i = 0; i < arguments.length; i++) {
//     var arrayArguments = arguments[i];
//     // Loops through the array at hand
//     for (var j = 0; j < arrayArguments.length; j++) {
//       var indexValue = arrayArguments[j];
//       // Checks if the value is already on the final array.
//       if (finalArray.indexOf(indexValue) < 0) {
//         finalArray.push(indexValue);
//       }
//     }
//   }
//   return finalArray;
// }
// // test here
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4, 6], [2, 1, 6, 7]));


// 12
// function convertHTML(str) {
//   var temp = str.split("");
//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }
//   temp = temp.join("");
//   return temp;
// }
// //test here
// console.log(convertHTML("Dolce & Gabbana"));

// 13
// function sumFibs(num) {
//   if (num < 0) return -1;
//   if (num === 0 || num === 1) return 1;
//   const arrFib = [1, 1];
//   let nextFib = 0;
//   while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
//     arrFib.unshift(nextFib);
//   }
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }
// // test here
// sumFibs(4);

// 14
// function sumFibs(num) {
//   if (num < 0) return -1;
//   if (num === 0 || num === 1) return 1;
//   const arrFib = [1, 1];
//   let nextFib = 0;
//   while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
//     arrFib.unshift(nextFib);
//   }
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }
// // test here
// console.log(sumFibs(1));
// console.log(sumFibs(4));
// console.log(sumFibs(1000));
// console.log(sumFibs(4000000));

// 15
// function sumPrimes(num) {
//   var res = 0;
//     function getPrimes(max) {
//     var sieve = [];
//     var i;
//     var j;
//     var primes = [];
//     for (i = 2; i <= max; ++i) {
//       if (!sieve[i]) {
//         primes.push(i);
//         for (j = i << 1; j <= max; j += i) {
//           sieve[j] = true;
//         }
//       }
//     }
//     return primes;
//   }
//   var primes = getPrimes(num);
//   for (var p = 0; p < primes.length; p++) {
//     res += primes[p];
//   }
//   return res;
// }
// // test here
// console.log(sumPrimes(0)); // 2 + 3 
// console.log(sumPrimes(10)); // 2+3+5+7+9
// console.log(sumPrimes(977));

// 16
// const smallestCommons = arr => {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sol = max;

//   for (let i = max - 1; i >= min; i--) {
//     if (sol % i) {
//       sol += max;
//       i = max;
//     }
//   }
//   return sol;
// };
// // test here
// console.log(smallestCommons([1, 5]));

// 17
// function dropElements(arr, func) {
//   var times = arr.length;
//   for (var i = 0; i < times; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }
// // test here
// dropElements([1, 2, 3, 4], function(n) {
//   return n >= 3;
// });

// 18
// function steamrollArray(arr) {
//   let flat = [].concat(...arr);
// return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }
// steamrollArray([1, [2], [3, [[4]]]]);

// 19
// function binaryAgent(str) {
//   var biString = str.split(" ");
//   var uniString = [];
//   for (var i = 0; i < biString.length; i++) {
//     uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//   }
//   return uniString.join("");
// }
// // test here
// console.log(binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// ));
// console.log(binaryAgent(
//   "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
// ));

// 20
// function truthCheck(collection, pre) {
//   // Is everyone being true?
//   return collection.every(obj => obj[pre]);
// }
// truthCheck(
//   [
//     { user: "Tinky-Winky", sex: "male" },
//     { user: "Dipsy", sex: "male" },
//     { user: "Laa-Laa", sex: "female" },
//     { user: "Po", sex: "female" }
//   ],
//   "sex"
// );

// 21
// function addTogether(first, second) {
//   if (typeof first !== "number") {
//     return undefined;
//   }
//   const sum = second =>
//     typeof second === "number" ? first + second : undefined;
//   return typeof second === "undefined" ? second => sum(second) : sum(second);
// }
// // test here
// console.log(addTogether(2, 3));
// console.log(addTogether(97, 678));
// console.log(addTogether(2, [9]));
// console.log(addTogether("2", 3));

// 22
// var Person = function(firstAndLast) {
//   var fullName = firstAndLast;
//     this.getFirstName = function() {
//       return fullName.split(" ")[0];
//   };
//     this.getLastName = function() {
//       return fullName.split(" ")[1];
//   };
//     this.getFullName = function() {
//       return fullName;
//   };
//     this.setFirstName = function(name) {
//       fullName = name + " " + fullName.split(" ")[1];
//   };
//     this.setLastName = function(name) {
//       fullName = fullName.split(" ")[0] + " " + name;
//   };
//     this.setFullName = function(name) {
//       fullName = name;
//   };
// };
// var bob = new Person("Bob Ross");
// console.log(bob.getFullName());

// 23
// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   for (var prop in arr) {
//     var orbitalPer = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
//     );
//     delete arr[prop].avgAlt;
//     arr[prop].orbitalPeriod = orbitalPer;
//   }
//   return arr;
// }
// // test here
// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);