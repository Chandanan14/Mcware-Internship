let arr = [10,20,30,40,50]
console.log(arr)

//shallow copy
//spread operator
let arr2 = [...arr]
console.log(arr2)

//shallow copy
//slice operator
let arr3 = arr2.slice()
console.log(arr3)

//deep copy
//structuredClone
let arr4 = structuredClone(arr3)
console.log(arr4)


let ar1=[{name: "John", age: 30},{name: "Jane", age: 25}]
console.log(ar1)

let ar2 = ar1.slice()
console.log(ar2)
