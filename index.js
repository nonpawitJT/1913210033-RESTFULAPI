// const datefns = require('date-fns')

// console.log(datefns.format(new Date(),"MM/dd/yyyy"))

// console.log("Hello World!");

// let firstName = "Nonpawit"
// let age = 22
// let info = `
// My name is ${firstName}
// My age is ${age}  
// `
// console.log(info)

const user = {
    name : "Nonpawit",
    salary : 500000,
    address : { province : "Krabi",
    postcode : 81000
    }
}

// console.log(user.address.postcode)

const showData =() =>` ${user.name}`
// console.log(showData())

const showData2 =() => {
    let info = 'My name is '
    return  `${info}${user.name}`
}
// console.log(showData2())

// const sumNumber =(a,b) => a+b;
// console.log(sumNumber(8,9))

const {name,salary,address:{postcode,province}} = user;
console.log(province);


