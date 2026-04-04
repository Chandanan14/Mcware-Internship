// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then(txt => {
//     console.log(txt)
//     console.log(JSON.parse(txt));
// })
// .catch(() => console.log("api failed"));

// async function getCatFact(){
//    try{
// const data = await fetch("https://catfact.ninja/fact");
//    const txt = await data.json();
//    console.log(txt.fact);
//    }
//    catch(error){
//     console.log("sry api failed! meow!");
//    }
// }

// getCatFact();

//GET METHOD
// let data = await fetch("https://api.restful-api.dev/objects " , { method : "GET"});
// let txt = await data.json();
// console.log(txt);

//POST METHOD

let exmp = {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}

async  function testRestApi(){
    
let data = await fetch("https://api.restful-api.dev/objects" , 
    { 
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body:JSON.stringify(exmp)
    });

let txt = await data.json();
console.log(txt);


}

testRestApi();