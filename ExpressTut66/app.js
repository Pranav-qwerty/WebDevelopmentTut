const express = require("express");

const app = express();
const port = 80;

app.use("/static", express.static('static'))
app.get("/", (req, res)=>{
    res.status(send("This is my first Home page using Express App"));
});
app.get("/about", (req, res)=>{
    res.send("This is my first About page using Express App");
});
app.post("/about", (req, res)=>{
    res.send("This is my first post request of About page using Express App");
});
app.get("/help", (req, res)=>{
    res.send("This is my first Help page using Express App");
});
app.get("/services", (req, res)=>{
    res.send("This is my first Services page using Express App");
});

app.listen(port, ()=>{
    console.log(`The App is started on port ${port}`);
});