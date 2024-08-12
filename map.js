const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map((num) => (num + 10))

const newNums = myNums
                .map((num) => (num *10) )
                .map((num)=>(num+1))
                .filter((num)=>(num>=40))
console.log(newNums)

const temp = [1,4,2,7,10,11,6,8,11,9];

let result = [...new Set(temp)];
result.sort((a,b) => b-a );
console.log(result[1])