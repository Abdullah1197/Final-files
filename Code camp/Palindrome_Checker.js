// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// 1
// function palindrome(str) {
//     str = str.toLowerCase().replace(/[\W_]/g, "");
//     for (var i = 0, len = str.length - 1; i < len / 2; i++) {
//       if (str[i] !== str[len - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(palindrome("eye"));
//   console.log(palindrome("A man, a plan, a canal. Panama"));
  
// 2
// var convertToRoman = function(num) {
//     var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     var romanNumeral = [
//       "M",
//       "CM",
//       "D",
//       "CD",
//       "C",
//       "XC",
//       "L",
//       "XL",
//       "X",
//       "IX",
//       "V",
//       "IV",
//       "I"
//     ];
//     var romanized = "";
//     for (var index = 0; index < decimalValue.length; index++) {
//       while (decimalValue[index] <= num) {
//         romanized += romanNumeral[index];
//         num -= decimalValue[index];
//       }
//     }
//     return romanized;
//   };
//   // test here
//   console.log(convertToRoman(36));
//   console.log(convertToRoman(10));
//   console.log(convertToRoman(981));

// 3
// function rot13(str) {
//     var rotCharArray = [];
//     var regEx = /[A-Z]/;
//     str = str.split("");
//     for (var x in str) {
//       if (regEx.test(str[x])) {
//         rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
//       } else {
//         rotCharArray.push(str[x].charCodeAt());
//       }
//     }
//     str = String.fromCharCode.apply(String, rotCharArray);
//     return str;
//   }
//   // Change the inputs below to test
//   rot13("LBH QVQ VG!");

// 4
// function telephoneCheck(str) {
//     var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//     return regex.test(str);
//   }
//   console.log(telephoneCheck("555-555-5555"));
//   console.log(telephoneCheck("5555555555"));
  
// 5
// var denom = [
//     { name: "ONE HUNDRED", val: 100.0 },
//     { name: "TWENTY", val: 20.0 },
//     { name: "TEN", val: 10.0 },
//     { name: "FIVE", val: 5.0 },
//     { name: "ONE", val: 1.0 },
//     { name: "QUARTER", val: 0.25 },
//     { name: "DIME", val: 0.1 },
//     { name: "NICKEL", val: 0.05 },
//     { name: "PENNY", val: 0.01 }
//   ];
//   function checkCashRegister(price, cash, cid) {
//     var output = { status: null, change: [] };
//     var change = cash - price;
  
//     var register = cid.reduce(
//       function(acc, curr) {
//         acc.total += curr[1];
//         acc[curr[0]] = curr[1];
//         return acc;
//       },
//       { total: 0 }
//     );
  
//     if (register.total === change) {
//       output.status = "CLOSED";
//       output.change = cid;
//       return output;
//     }
  
//     if (register.total < change) {
//       output.status = "INSUFFICIENT_FUNDS";
//       return output;
//     }
//     var change_arr = denom.reduce(function(acc, curr) {
//       var value = 0;
//       while (register[curr.name] > 0 && change >= curr.val) {
//         change -= curr.val;
//         register[curr.name] -= curr.val;
//         value += curr.val;
//         change = Math.round(change * 100) / 100;
//       }
//       if (value > 0) {
//         acc.push([curr.name, value]);
//       }
//       return acc; 
//     }, []); 
//     if (change_arr.length < 1 || change > 0) {
//       output.status = "INSUFFICIENT_FUNDS";
//       return output;
//     }
//     output.status = "OPEN";
//     output.change = change_arr;
//     return output;
//   }
//   // test here
//   console.log(checkCashRegister(19.5, 20.0, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
//   ]));