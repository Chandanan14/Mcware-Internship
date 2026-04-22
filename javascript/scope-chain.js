let userName = "Sarah";
let userRole = "User";

function checkAccess() {
   let hasAcess =false;
   if(userRole === "Admin") {
    let welcomeMsg = `${userName} you have admin privileges!`;
    hasAcess = true;
    console.log(welcomeMsg);
   }
   console.log("Has Access: ", hasAcess);
}

checkAccess();


let firstName = "chan";

function outerFunction() {
    let outerVar = "from outer function";
    function innerFunction() {
        let innerVar = "from inner function";
         console.log(innerVar);
        console.log(outerVar);
          console.log(firstName);
       
    }

    innerFunction();
}

outerFunction();

