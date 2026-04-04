const jsonData = `{
  "users": [
    {
      "id": 1,
      "name": "Aarav Sharma"
    }
  ]
}`;

const parsedData = JSON.parse(jsonData);
console.log(parsedData);

console.log(parsedData.users[0].name);


const response = {
  sucess:true,
  message:"data recieved"
}

const jsonstring = JSON.stringify(response);
console.log(jsonstring);