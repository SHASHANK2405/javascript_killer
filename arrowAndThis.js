const user = {
    username: "Shashank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this)
    }
}

user.welcomeMessage();
user.username = "Prabhat";
user.welcomeMessage();

//++++++++++++++ARROW FUCTION++++++++++++++

// const addTwo = (num1 , num2) => {                 //explictly
//     return num1 + num2
// }


const addTwo = (num1 , num2) => (num1 + num2)        // if implictly 

// for objects
const chai = (num1 , num2) => ({username: "Shashank"})

console.log(addTwo(5 , 6));