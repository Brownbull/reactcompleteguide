map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Advanced Arrays
const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

// console.log(double);
// same as

// MAP
const mapArray = array.map((num) => {
    return num * 2;
})

// FILTER
const filterArray = array.filter((num) => {
    return num > 5;
})

// REDUCE
const reduceArray = array.reduce((accu, num) => {
    acc + num; // return sum of all elements
}, 0) // 0 is the starting number for accumulator
