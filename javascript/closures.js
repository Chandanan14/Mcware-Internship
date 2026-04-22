function fun1() {
   console.log("this is fun1() ");
   
   function fun2() {
      console.log("this is fun2() ");
   }
   
   return fun2;
}

const exmp = fun1();
exmp();

function outerFunction() {
    let outerVariable = 10;
    
    function innerFunction() {
        console.log("outerVariable: " ,outerVariable);
    }
    
    return innerFunction;
}

exmp = outerFunction();
exmp();



function createCounter() {
    let counter = 0;
    
    return function(){
        counter += 1;
        console.log(counter);
    }
   
}

const counterA = createCounter();
counterA();
counterA();


const counterB = createCounter();
counterB();
counterB();


