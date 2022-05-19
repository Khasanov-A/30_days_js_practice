let number = 5
number > 0 ?
    console.log(`${number} is a positive number`) :
    console.log(`${number} is a negative number`);

number = -5

number > 0 ?
    console.log(`${number} is a positive number`) :
    console.log(`${number} is a negative number`);

// Window Methods
// Window alert() method


// Window confirm() method
// const agree = confirm('Are you sure you like to delete? ');
// console.log(agree);

// const now = new Date()
// console.log(now);

// const now = new Date()
// console.log(now.getFullYear())

// const allSeconds = Date.now() //
// console.log(allSeconds)

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56