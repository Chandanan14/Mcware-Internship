function exmp(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("task completed");
            //reject("failed");
            resolve("success");
        },3000);
    });
}

// exmp()
// .then(() => {
//     console.log("Promise fulfilled");
// })
// .catch(() => {
//     console.log("Promise unfulfilled");
// });

async function run(){
    // await exmp();
    // console.log("promise fulfilled");
    try{
        await exmp();
         console.log("promise fulfilled");
    } catch (error) {
        console.log("promise rejected");
    }
}

run();