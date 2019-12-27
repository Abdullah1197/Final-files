// Regular Expressions

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);

// 2
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

// 3
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
//  // Change this line
// let result = petRegex.test(petString);
// console.log(result);

// 4
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp|FreeCodeCamp|FreecodeCamp|FreeCodecamp|FreeCOdeCamp|FrEeCoDeCamp|FrEeCodECamp|FReeCodeCAmp/; // Change this line
// let result = fccRegex.test(myString);
// console.log(result);

// 5
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// 6
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle|Twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

// 7
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line // for similier words we can use the same words in that word for all of these. like in this case we use un for all the fun pun sun gun nun
// let result = unRegex.test(exampleStr);

// 8
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// 9
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

// 10
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// 11
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou^0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// 11
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; 
// let result = difficultSpelling.match(myRegex);

// 12
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);

// 13
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h1?>/; // Change this line
// let result = text.match(myRegex);

// 14
// example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
// let reCriminals = /C+/; // Change this line
// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

// 15
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);

// 16
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// 17
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// 18
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;

// 19
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;

// 20
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

// 21
// let username = "JackOfAllTrades";
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// let result = userCheck.test(username);

// 22
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// 23
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);

// 24
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result = ohRegex.test(ohStr);

// 25
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);

// 26
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// 27
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// 28
// let sampleWord = "astronaut";
// let pwRegex = /^(?=\w{6})(?=\D+\d{2})/;
// let result = pwRegex.test(sampleWord);

// 29
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).*Roosevelt/;
// let result = myRegex.test(myString);
// // After passing the challenge experiment with myString and see how the grouping works

// 30
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);

// 31
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

// 32
// let hello = "   Hello, World!  ";
// let wsRegex = /^\s+|\s+$/g; // Change this line
// let result = hello.replace(wsRegex, ""); // Change this line
