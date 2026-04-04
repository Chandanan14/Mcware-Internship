let ar = [10,20,30,40,50];
console.log(ar);

//array methods
//push - adds element to the end of the array
ar.push(60);
console.log(ar);

//unshift - adds element to the beginning of the array
//(not efficient)
ar.unshift(70);
console.log(ar);

//pop - removes element from the end of the array
let x = ar.pop();
console.log(x);
console.log(ar);

//shift - removes element from the beginning of the array
//(not efficient)
let y = ar.shift();
console.log(y);
console.log(ar);

//splice - removes element from the array at specific index
//splice(startIndex, deleteCount, item1, item2, ...)
let remove = ar.splice(2, 1);
console.log(remove);
console.log(ar);

//splice - adds element to the array at specific index
//splice(startIndex, deleteCount, item1, item2, ...)
ar.splice(2, 0, 30);
console.log(ar);

//search - finds element in the array
//search(startIndex, searchElement)
let index = ar.indexOf(30);
console.log(index);

console.log(ar.lastIndexOf(30));

console.log(ar.includes(30));

