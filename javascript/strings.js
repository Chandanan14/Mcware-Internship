let name= 'chan';
let greet= `Hello, ${name}!`;
console.log(greet);

let text = "Hello World";
console.log(text.length);

console.log(name[0])

//string methods
let userInput ="  Alice Johnson  |  ALICE@example.com  |  Javascript developer and coffee enthusiast";
let parts = userInput.split('|');
console.log(parts);
let username = parts[0].trim();

let email = parts[1].trim();

let bio = parts[2].trim();

console.log(username);
console.log(email);
console.log(bio);

console.log(username.toUpperCase());
console.log(email.toLowerCase());

console.log(bio.includes("coffee"));

let updatedBio = bio.replace("coffee", "tea");
console.log(updatedBio);

console.log(bio.slice(0, 10));
console.log(bio.length);

console.log(email.includes("@") && email.endsWith(".com"));

let separator = "-".repeat(20);

let finalProfile = `
${separator}
 User Profile:
${separator}
 Name : ${username.trim ().toUpperCase()}
 Email : ${email.trim ().toLowerCase()}
 Bio : ${bio.trim ()}
${separator}`;

console.log(finalProfile);