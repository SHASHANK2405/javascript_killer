// console.log("hello world");

// const temp = ["shashank" , 22 , "Badminton"]
// console.log(temp[1]);

const name = new String('   SHASHANK GULATI');             // String Declaration
// console.log(name.indexOf('H'));

// STRING METHODS
console.log(name.__proto__)
console.log(name.length)
console.log(name.trim())
console.log(name.toLowerCase())
console.log(name.slice(0 , 4))

const temp2 = [...name];        //String to ARRAy conversion
console.log(temp2)