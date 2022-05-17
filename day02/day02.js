let numOne = 3;
let numTwo = 3;
let js = 'JavaScript';
let py = 'Python';
let lightOn = true;
let lightOff = false;

console.log(numOne == numTwo);
console.log(js == py);
console.log(lightOn == lightOff);


// array malumotlarni indexga boshlob boradi, console.log(nums[0]).
// array length nechta kataklar borligini belgilab va ko'rsatib beradi.
// array [..._____] ichidagini yoyib ko'piyalidi ln hammasini ko'rsatib beradi, yoki _____.slice turlari ni yoyish boyicha ln ichidagilarini o'zgartirish hususiyatiga ega.
// arrayda push berib o'tilsa natijani oxiriga qo'shib boradi.


// obyekt asa kalitsozga console.log(nums.son) yoki console.log(nums['kalit nomi']).
// obyektda oxiriga esa kalitso'zni oxiriga qoshish uchun oxirida kalitso'zni qoshadi.
// obyekda [...____] va slice ni ishlatib bolmidi.



// Non-Primitive Data Types (Ibtidoiy bo'lmagan ma'lumotlar turlari)

let nums = [1, 2, 3]; // Array turi
nums[0] = 10;
nums[1] = 11;
nums[2] = 12;
console.log(nums);

let word = 'JavaScript';
word += 'Y';
console.log(word);



let nums = [2, 3] //number
let numbers = [2, 3] //number array

console.log(nums == numbers) // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching', //string obyekt
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching', //string
    country: 'Finland'
}

console.log(userOne == userTwo) // false


let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

let string = 'JavaScript';
console.log(string.substr(4, 5));



let stringa = '30 Days Of JavaScript'

console.log(stringa.indexOf('D')) // 3
console.log(stringa.indexOf('Days')) // 3
console.log(stringa.indexOf('days')) // -1
console.log(stringa.indexOf('a')) // 4
console.log(stringa.indexOf('JavaScript')) // 11
console.log(stringa.indexOf('Script')) //15
console.log(stringa.indexOf('script')) // -1



let strings = 'I Love JavaScript. If you do not love JavaScript what else can you love.'
console.log(strings.search('love')) // 2
console.log(strings.search(/javascript/g)) // 7