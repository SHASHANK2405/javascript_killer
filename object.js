// Object Creation

const mySym = Symbol("key1");
const jsUser = {
    Name: "Shashank",
    age: 22,
    location: "Delhi",
    [mySym]: "myKey1",
    email: "shashankgulati2405@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)            //bad practice
// console.log(jsUser["email"])         //good practice
// console.log(typeof jsUser[mySym])

jsUser.greeting = function() {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.Name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());