//javascript turneryOparator

function isturnary(val){
    return (val ? "the value is true" : "the value is false")
}

const log=isturnary(false)
const log2=isturnary(true)
// console.log(log);
// console.log(log2);


///array distrucring assignment

const array =["javascript","node js","react","pytho"]
const [a,b,c,d,e]=array

// console.log(a,b,c,d,e);

console.log(array.length);
let [top1,,last]=array
console.log(top1,last);