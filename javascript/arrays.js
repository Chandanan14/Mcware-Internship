let arr = ["rohith", "megha", "Shilpa", "Anirudh","soms", "Divya"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

//creating empty array with length
let arr2 = new Array(5);
arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2[3] = 40;
arr2[4] = 50;
console.log(arr2);


let i;
for(i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}


//for of loop
for( let x of arr){
    console.log(x);
}