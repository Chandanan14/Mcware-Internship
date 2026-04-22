//type casting or type conversion
//converting number to string
let a = 123;
console.log(a);
console.log(typeof a);
let b = String(a);
console.log(b);
console.log(typeof b);

//converting string to number
let c = "123";
console.log(c);
console.log(typeof c);
let d = Number(c);
console.log(d);
console.log(typeof d);

//converting boolean to string
let e = true;
console.log(e);
console.log(typeof e);
let f = String(e);
console.log(f);
console.log(typeof f);

//converting string to boolean
let g = "true";
console.log(g);
console.log(typeof g);
let h = Boolean(g);
console.log(h);
console.log(typeof h);

//converting boolean to number
let k = true;
console.log(k);
console.log(typeof k);
let l = Number(k);
console.log(l);
console.log(typeof l);

//converting string to number using parseInt
let i = "123word";
console.log(i);
console.log(typeof i);
let j = parseInt(i);
console.log(j);
console.log(typeof j);

//numbers to boolean
//all non-zero numbers are true (positive and negative)
//zero , NaN, null, undefined is false 
let value = 0;
console.log(value);
console.log(typeof value);
let booleanValue = Boolean(value);
console.log(booleanValue);
console.log(typeof booleanValue);

let value2 = NaN;
console.log(value2);
console.log(typeof value2);
let booleanValue2 = Boolean(value2);
console.log(booleanValue2);
console.log(typeof booleanValue2);

//string to boolean
//empty string and empty array is false
//non-empty string is true
let string1 = "";
console.log(string1);
console.log(typeof string1);
let booleanValue3 = Boolean(string1);
console.log(booleanValue3);
console.log(typeof booleanValue3);

let string2 = "hello";
console.log(string2);
console.log(typeof string2);
let booleanValue4 = Boolean(string2);
console.log(booleanValue4);
console.log(typeof booleanValue4);
