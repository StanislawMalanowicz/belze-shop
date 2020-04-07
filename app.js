const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: false }));

// let message = "i am emtpy";
// console.log(`message is ${message}`)







app.post('/save',( req, res) => {
    console.log(req.body)
})










// app.get("/save", (req, res) => {
//   console.log("app post req body: ", req.body);

//     const { name, surname } = req.body; //Pamiętasz ten skrótowy zapis z ES6?
//   //   message = name;
//   res.send("Więc twierdzisz, że nazywasz się ", name);
//   console.log('sended')
// });












app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000')
});