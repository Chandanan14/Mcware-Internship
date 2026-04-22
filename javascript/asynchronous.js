

function fun1(){
    console.log("Function 1 execution started");
    console.log("Function 1 execution completed");
}

function fun2(){
    console.log("Function 2 execution started");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    
    while (Date.now() <= end) {
        
    }
    
    console.log("Function 2 execution completed");
}

function fun3(){
    console.log("Function 3 execution started");
    console.log("Function 3 execution completed");
}

fun1();
fun2();
fun3();




function fun4(){
    console.log("Function 4 execution started");
    console.log("Function 4 execution completed");
}

function fun5(){
    console.log("Function 4 execution started");
    console.log("Function 4 execution completed");
}

function fun6(){
    console.log("Function 6 execution started");
    console.log("Function 6 execution completed");
}

fun4();
setTimeout(fun5, 5000);
fun6();

function interval(){
console.log("Fetching data...");
}

let intervalId = setInterval(interval,2000);

setTimeout(() => clearInterval(intervalId) , 10000);

