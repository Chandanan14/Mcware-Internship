function exmp(car) {
        console.log(car);
    }

let c1={
    name: "BMW",
    cost: 75.6,
    mileage: 8.9
};

exmp(c1);

//return obj from function
function createCar() {
    let cr= {
        name: "BMW",
        cost: 75.6,
        mileage: 8.9
    };
    return cr;

}

console.log(createCar());



function add(a, b) {
    console.log(a + b);
}

add(10, 20);

let add1;
add1 = add;

add1(10,20);

function example(fun){
    fun(100,200);
}

example(add);
