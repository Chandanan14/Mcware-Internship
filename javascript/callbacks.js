function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(10, 20,add));





function circleArea(r) {
    return Math.PI * r * r;
}

function squareArea(side) {
    return side * side;
}

function equilateralTriangleArea(side) {
    return (Math.sqrt(3) / 4) * side * side;
}

function calculateArea(value , callback) {
    return callback(value);
}
calculateArea(5, circleArea);
calculateArea(5, squareArea);
calculateArea(5, equilateralTriangleArea);
