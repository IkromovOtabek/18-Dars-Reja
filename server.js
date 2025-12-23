console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require("http");
const { json } = require("stream/consumers");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
// app.get("/greeting", function(req, res){ //http://localhost:3000/greeting
//     // res.end("Hello World Salom Otabek");
//     res.end(`<h1 style="color: red">Hello Owen</h1>`);
// });
// app.get("/gift", function(req, res){ //http://localhost:3000/gift
//     res.end(`<h1 style="color: green">Siz gift pagesizdasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success"});
})

app.get("/", function(req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is runing seccuessfully on port: ${PORT}`)
});

// express va ness eng  mashxur backend framework in Node.js

// Frontendni 2xil usulda amalga oshiriladi: 1. Traditional - ejs framework foydalangan xolda BSSR - Backend Server Side Rendering - backendni ichida frontendi qurish 2. Single Page