Exercise: 'Level 1';

// 1) Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript';

// 2) Print the string on the browser console using console.log()

console.log(challenge);

// 3) Print the length of the string on the browser console using console.log()

console.log(challenge.length);

// 4) Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());

// 5) Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());

// 6) Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(3, 4)); // berda substr ni boshlanishi 3 katakdan boshlanib 4 katak garak bolsa shuni belgilisan
console.log(challenge.substring(3, 8)); // berda substring ni boshlanishi 3 katakdan boshlanib 8 katakda tugashini belgilisan

// 7) Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substr(3)); //lekin substr(3, 21) dab belgilash garak
console.log(challenge.substring(3)); //lekin substring(3, 21) dab belgilash garak

// 8) Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'));

// 9) Split the string into an array using split() method

console.log(challenge.split());

// 10) Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '));

// 11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let brends = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(brends.split(','));

// 12) Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Python'));

// 13) What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15));

// 14) What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(11));

// 15) Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf("30"));

// 16) Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf("JavaScript"));

// 17) Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));

// 18) Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.lastIndexOf('because'));

// 19) Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.search('You'));

// 20) Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

console.log(challenge.trim(' '));

// 21) Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('30 Days Of JavaScript'));

// 22) Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('30 Days Of JavaScript'));

// 23) Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match('a'));

// 24) Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let challenges = '30 Days of '

console.log(challenges.concat('JavaScript'));

// 25) Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));


Exercise: 'Level 2';

// 1) Using console.log() print out the following statement:

console.log('There is no exercise better for the heart than reaching down and lifting people up.');

// 2) Using console.log() print out the following quote by Mother Teresa:

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log('10' == 10);

// 4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num = '9.8';
let numFloat = parseFloat(num);

console.log(numFloat == 10);

// 5) Check if 'on' is found in both python and jargon

let a = 'pytho';
let b = 'jargon';
console.log(a.includes('on') + b.includes('on')); //includes danam foydalansa boladi yo endsWith dan lekin incudesda to'liq bo'lishi garak
console.log(b.endsWith('on'));

// 6) I hope this course is not full of jargon. Check if jargon is in the sentence.

let textA = 'I hope this course is not full of jargon.';
console.log('jargon = ', textA.includes('jargon'));


// 7) Generate a random number between 0 and 100 inclusively.

let randomNum = Math.random();
let randomNums = Math.floor(randomNum * 100);
console.log('a random number between 0 and 100 = ', randomNums);

// 8) Generate a random number between 50 and 100 inclusively.

let randomNums1 = Math.floor(randomNum * 50) + 50;
console.log('a random number between 50 and 100 = ', randomNums1);

// 9) Generate a random number between 0 and 255 inclusively.

let randomNu = Math.floor(randomNum * 255);

console.log('a random number between 0 and 255 = ', randomNu);

// 10) Access the 'JavaScript' string characters using a random number.

const text = "JavaScript";
const index = Math.floor(Math.random() * text.length);
const harf = text.charAt(index);

console.log(harf);

// 11) Use console.log() and escape characters to print the following pattern.

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

// 12) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const wordss = 'because because because';
const start = sentence.search('because');
const end = wordss.length;
const finish = sentence.substr(start, end);

console.log(finish);


Exercises: 'Level 3';

// 1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// let textB = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
//     // let pattern = '/love/gi';
//     // let find = textB.match(pattern);
// let numberA = textB.includes('love');
// console.log(numberA);

// 2) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let patternA = /because/gi;
console.log(sentence.match(patternA));

// 3) Clean the following text and find the most frequent word (hint, use replace and regular expressions).



// 4) Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'