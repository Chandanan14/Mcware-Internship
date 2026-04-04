let ar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(ar);

let i;
let j;
for(i = 0; i < ar.length; i++){
   for(j = 0; j < ar[i].length; j++){
      console.log(ar[i][j]);
   }
}

//multidimensional array
let students = [
    [["name", "john"],
    ["age", 20],
    ["city", "New York"],
    ["country", "USA"]],
    [["name", "jane"],
    ["age", 22],
    ["city", "London"],
    ["country", "UK"]],
    [["name", "bob"],
    ["age", 21],
    ["city", "Paris"],
    ["country", "France"]]
]

for(let i = 0; i < students.length; i++){
    for(let j = 0; j < students[i].length; j++){
        for(let k = 0; k < students[i][j].length; k++){
            console.log(students[i][j][k]);
        }
    }
}