//control statements
//if statement
let age = 18;
if (age >= 18){
    console.log("You are an adult");
}

let cartTotal = 12000;
if (cartTotal >= 10000){
    console.log("You have qualified for free shipping");
}

//if-else statement
let isVIP = true;
if (isVIP == true){
    console.log("Welcome to the VIP lounge!");
} else {
    console.log("Welcome to the regular lounge!");
}


let balance = 1000;
let withdrawAmount = 700;
if (balance >= withdrawAmount){
    console.log("Transaction successful");
} else {
    console.log("Insufficient balance");
}

//if-else-if statement
let ticketAge = 14;

if( ticketAge < 12){
  console.log("Child ticket")
}else if(ticketAge >= 12 && ticketAge <=65) {
  console.log("Adult ticket")
}else{
  console.log("Senior ticket")
}