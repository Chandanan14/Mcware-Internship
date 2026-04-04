//object
const car = {
    name: "car",
    color: "red",
    price: 10000,

    start: function(){
        console.log("car is starting...");
    },
    stop: function(){
        console.log("car is stopping...");
    },
    accelerate: function(){
        console.log("car is accelerating...");
    }
};

console.log(car.name);
console.log(car.color);
console.log(car.price);
car.start();
car.stop();
car.accelerate();

