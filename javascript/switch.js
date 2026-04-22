let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("You have full access");
        break;
    case "moderator":
        console.log("You have limited access");
        break;
    case "user":
        console.log("You have read-only access");
        break;
    default:
        console.log("Access denied");
}


let day = 0;

switch (day) {
    case 0:
    case 6:
        console.log("happy Weekend");
        break;
    case 1:
        console.log("happy monday");
        break;
    case 2:
    case 3:
    case 4:
        console.log("happy midweek");
        break;
    case 5:
        console.log("thank god it's friday");
        
}
