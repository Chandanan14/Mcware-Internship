//function

//no input no return
let a=10;
let b=20;
function add(){
    console.log(a+b);
}
add();

//no input but return
function sub(){
    return a-b;
}

let res = sub();
console.log(res);

//input but no return
function addnum(x, y){
    console.log(x+y);
}

addnum(10, 20); 

//input and return
function mul(x, y){
    return x*y;
}
let res2 = mul(5, 6);
console.log(res2);


//function declaration
function greet(){
    console.log("Hello");
}
greet();

//arrow function
let greet2 = () => console.log("Hello");
greet2();

//immediate invoked function expression (IIFE)
(function(){
    console.log("Hello");
})();
 
//function expression
function greet3(){
    console.log("Hello");
}
greet3();

