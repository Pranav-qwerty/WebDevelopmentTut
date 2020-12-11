const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
const port = 80;


var contactScama = new mongoose.Schema({
    name: String,
    phoneno: String,
    email: String,
    password: String,
    address: String,
    job: String,
});

var Contact = mongoose.model('Contact', contactScama);


app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
});
app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not send to the database!")
    })
});


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});