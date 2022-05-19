// Exercises: Level 1
// 1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Akhmadjon";
let lastName = "Khasanov";
let country = "Uzbekiston";
let city = "Urganch";
let age = 25;
let Married = 'Unmarried';
let year = 2022;

console.log('firstName = ', typeof firstName);
console.log('lastName = ', typeof lastName);
console.log('country = ', typeof country);
console.log('city = ', typeof city);
console.log('age = ', typeof age);
console.log('isMarried = ', typeof Married);
console.log('year = ', typeof year);

// 2) Check if type of '10' is equal to 10

console.log((typeof('10') === (typeof 10)));

// 3) Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') === 10);

// 4) Boolean value is either true or false.

// 4.1) Write three JavaScript statement which provide truthy value.

console.log(4 > 3);
console.log('4' == '4');
console.log(4 === 4);

// 4.2) Write three JavaScript statement which provide falsy value.

console.log(4 < 3);
console.log('4' === 4);
console.log(4 != '4');

// 5) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 5.1) 4 > 3
let checkA = 4 > 3;
console.log(checkA);
// 5.2) 4 >= 3
let checkB = 4 >= 3;
console.log(checkB);
// 5.3) 4 < 3
let checkC = 4 < 3;
console.log(checkC);
// 5.4) 4 <= 3
let checkD = 4 <= 3;
console.log(checkD);
// 5.5) 4 == 4
let checkE = 4 == 4;
console.log(checkE);
// 5.6) 4 === 4
let checkF = 4 === 4;
console.log(checkF);
// 5.7) 4 != 4
let checkG = 4 != 4;
console.log(checkG);
// 5.8) 4 !== 4
let checkH = 4 !== 4;
console.log(checkH);
// 5.9) 4 != '4'
let checkI = 4 != '4';
console.log(checkI);
// 5.10) 4 == '4'
let checkJ = 4 == '4';
console.log(checkJ);
// 5.11) 4 === '4'
let checkK = 4 === '4';
console.log(checkK);
// 5.12) Find the length of python and jargon and make a falsy comparison statement.
let wordA = 'python';
let wordB = 'jargon';
let checka = wordA.length;
let checkb = wordB.length;
console.log(checka != checkb);

// 6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 6.1) 4 > 3 && 10 < 12
let checkAA = 4 > 3 && 10 < 12;
console.log(checkAA);
// 6.2) 4 > 3 && 10 > 12
let checkBB = 4 > 3 && 10 > 12;
console.log(checkBB);
// 6.3) 4 > 3 || 10 < 12
let checkCC = 4 > 3 || 10 < 12;
console.log(checkCC);
// 6.4) 4 > 3 || 10 > 12
let checkDD = 4 > 3 || 10 > 12;
console.log(checkDD);
// 6.5) !(4 > 3)
let checkEE = !(4 > 3);
console.log(checkEE);
// 6.6) !(4 < 3)
let checkFF = !(4 < 3);
console.log(checkFF);
// 6.7) !(false)
let checkGG = !(false);
console.log(checkGG);
// 6.8) !(4 > 3 && 10 < 12)
let checkHH = !(4 > 3 && 10 < 12);
console.log(checkHH);
// 6.9) !(4 > 3 && 10 > 12)
let checkII = !(4 > 3 && 10 > 12);
console.log(checkII);
// 6.10) !(4 === '4')
let checkJJ = !(4 === '4');
console.log(checkJJ);
// 6.11) There is no 'on' in both dragon and python


// 7) Use the Date object to do the following activities

// 7.1) What is the year today?
let nowA = new Date();
console.log(nowA.getFullYear());
// 7.2) What is the month today as a number?
console.log(nowA.getMonth() + 1);
// 7.3) What is the date today?
console.log(nowA.getDate());
// 7.4) What is the day today as a number?
console.log(nowA.getDay());
// 7.5) What is the hours now?
console.log(nowA.getHours());
// 7.6) What is the minutes now?
console.log(nowA.getMinutes());
// 7.7) Find out the numbers of seconds elapsed from January 1, 1970 to now.
let allSeconds = Date.now();
console.log(allSeconds);

// Exercises: Level 2

//  1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// index_day03.html faylda yozilgan
// 2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// index_day03.html faylda yozilgan
// 3) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// index_day03.html faylda yozilgan
// 4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// index_day03.html faylda yozilgan
// 5) Calculate the slope, x-intercept and y-intercept of y = 2x -2
// index_day03.html faylda yozilgan
// 6) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10).
// index_day03.html faylda yozilgan
// 7) Compare the slope of above two questions.
// index_day03.html faylda yozilgan
// 8) Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// index_day03.html faylda yozilgan
// 9) Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// index_day03.html faylda yozilgan
// 10) If the length of your name is greater than 7 say, your name is long else say your name is short.
// index_day03.html faylda yozilgan
// 11) Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// for example: Your first name, Asabeneh is longer than your family name, Yetayeh
// index_day03.html faylda yozilgan
// 12) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// for example: I am 225 years older than you.
// index_day03.html faylda yozilgan
// 13) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// index_day03.html faylda yozilgan

// 14) Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
// index_day03.html faylda yozilgan
// 15) Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


// Exercises: Level 3
//1) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05