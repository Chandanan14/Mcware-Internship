//pass by reference
//passing address or reference of one variable to another
//  variable is called  pass by reference

let c1 = {
    name: "BMW",
    cost: 75.6,
    mileage: 8.9
};

console.log(c1.name);
console.log(c1.cost);
console.log(c1.mileage);

let c2;
c2 = c1;

console.log(c2.name);
console.log(c2.cost);
console.log(c2.mileage);

//pass by value
//passing value of one variable to another variable is called pass by value
let a = 10;
let b = a;
console.log(a);
console.log(b);
