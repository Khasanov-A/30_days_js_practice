let number = 5
number > 0 ?
    console.log(`${number} is a positive number`) :
    console.log(`${number} is a negative number`);

number = -5

number > 0 ?
    console.log(`${number} is a positive number`) :
    console.log(`${number} is a negative number`);

const now = new Date()
const allSeconds = Date.now()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(now.getFullYear())
console.log(allSeconds)
console.log(now);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56