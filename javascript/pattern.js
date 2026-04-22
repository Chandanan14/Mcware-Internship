let i;
let j;
let row;
let n = 10;

//block pattern
for(i=1;i<=n;i++){
    row = "";
    for(j=1;j<=n;j++){
        row += "* ";
    }
    console.log(row);
}

//square pattern
for(i=1;i<=n;i++){
    row = "";
    for(j=1;j<=n;j++){
        if(i === 1 || i === n || j === 1 || j === n){
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}


//design pattern
let row1;
let n1 = 11;

for(i=0;i<n1;i++){
    row1 = " ";
    for(j=0;j<n1;j++){
        if( i==0 || i==n1-1 || j==0 || j==n1-1 ||
             i==Math.floor(n1/2) || j==Math.floor(n1/2)|| 
             i==j || i+j==n1-1 || i+j == Math.floor(n1/2)
             || i-j == Math.floor(n1/2) || i+j == (n1-1) + Math.floor(n1/2) 
             ||  j-i == Math.floor(n1/2) ){
            row1 += "*";
        } else {
            row1 += " ";
        }
    }
    console.log(row1);
}

