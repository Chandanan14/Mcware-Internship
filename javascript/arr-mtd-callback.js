
//map() -create new array through callback function
let numbers1= [1,4,9,16];

let result1 = numbers1.map(x => Math.sqrt(x));
console.log(result1);

//filter() - create new array with elements that pass a test
let ages = [32, 15, 19, 12];

let result2 = ages.filter((x) => x > 18 ? true : false);
console.log(result2);

//reduce() - reduce array to single value
//reduce(callback, initialValue)
let numbers2 = [1, 4, 9, 16];
let result3 = numbers2.reduce((total, x) => total + x , 0);
console.log(result3);


//some() - check if at least one element passes a test
let score = [85, 72, 90, 67];
let result4 = score.some((x) => x > 85);
console.log(result4);

//every() - check if all elements pass a test
let numbers4 = [1, 4, 9, 6];
let result5 = numbers4.every((x) => x < 10);
console.log(result5);

//find() - return first element that passes a test
let numbers5 = [1, 4, 9, 16];
let result6 = numbers5.find((x) => x > 10);
console.log(result6);

//findIndex() - return index of first element that passes a test
let numbers6 = [1, 4, 9, 16];
let result7 = numbers6.findIndex((x) => x > 10);
console.log(result7);

//sort() - sort array
let fruits = ["apple", "mango", "banana", "orange"];
fruits.sort();
console.log(fruits);

let marks = [87 , 65, 45 , 98, 23];
marks.sort();
console.log(marks);