
const express = require('express')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.get("/", (req, res, next) => {
    console.log("this is going to be fun?");
    res.render("home")
})

app.post("/", (req, res, next) => {
    console.log("this is going to be fun?");
    res.render("home")
})

app.listen(3000);