// Object in object

const tempObj = {
    email: "shashankgulati@gmail.com",
    fullName : {
        userFullName: {
            firstname: "SHASHANK",
            lastname: "Gulati",
        }
    }
};

// console.log(tempObj.fullName.userFullName.firstname);

// OBJECTS METHODS 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

// const obj4 = Object.assign({}, obj1 , obj2 , obj3);
const obj4 = {...obj1 , ...obj2}
console.log(obj4)

// destructure of object