const myNums = [1 , 2 , 3]

// const total = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// } , 0)

const total = myNums.reduce((acc , currval) => acc + currval , 0)

console.log(total);

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
