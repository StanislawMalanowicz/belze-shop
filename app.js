const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded());

let message = "i am emtpy";
console.log(`message is ${message}`)

app.post("/save", (req, res) => {
  const { name, surname } = req.body; //Pamiętasz ten skrótowy zapis z ES6?
  message = name;
  res.send("Więc twierdzisz, że nazywasz się " + name + " " + surname);
});












app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000')
});