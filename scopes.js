function one() {
    const userName = "Shashank";

    function two(){
        const website = "Youtube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();


// +++++++++++++INTERESTING++++++++++++++    HOISTING

console.log(addOne(5))
function addOne(num){
    return num +1;
}

// console.log(addTwo(5));
const addTwo = function(num){
                    return num +2;
                }
console.log(addTwo(5));