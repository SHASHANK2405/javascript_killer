// const greeting = "HELLO WORLD";
// for(const greet of greeting){
//     console.log(`greet is ${greet}`)
// }

const map = new Map()
map.set('IN', "India");
map.set('USA', "America");
map.set('FR', "France");

console.log(map);

for(const [key , value] of map){                 //destructuring
    console.log(key, ':-', value);               //only map is iterate like this not objects
}


//FOR EACH LOOP
const coding =["c++","python","Java","C","ruby","rust"];

// coding.forEach((items) => {
//     console.log(items)
// })

// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr)
// })

const myCoding = [
    {
        languageName: "C++",
        languageExxtention: "c++"
    },
    {
        languageName: "javascript",
        languageExxtention: "js"
    },
    {
        languageName: "python",
        languageExxtention: "py"
    },
    {
        languageName: "text",
        languageExxtention: "txt"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageExxtention);
})