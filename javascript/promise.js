let prm = new Promise((resolve,reject) => {
    console.log("Executor function");
    resolve("{id: 1, name: 'John'}");
    reject("failed");
});

// prm.then((result) => {
//     console.log(result);
// });

// prm.catch((error) => {
//     console.log(error);
// });

prm
.then()
.catch()

//promise chain
let prom = new Promise(
    function executorFunc(resolve, reject) {
console.log("Water has started to boil..");
setTimeout(() => {
console.log("Water has been boiled");
// resolve();
reject("failed");
},3000);
})

prom.then(() => {
    console.log("Promise fulfilled!");
}).catch(() => {
    console.log("Promise unfulfilled");
})

setTimeout(() => {
    console.log("macro task");
}, 4000);

    