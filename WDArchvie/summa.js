var data = {
  name: "Ragul",
  age: 19,
}; // JS Object

const jsonData = JSON.stringify(data); // JS Object -> JSON

console.log(jsonData);

data = JSON.parse(jsonData); // JSON -> JS Object

console.log(data);
