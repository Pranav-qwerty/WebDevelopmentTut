var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/pranavcart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("We're connected!")
});
const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);

const pranavkitty = new Kitten({ name: 'pranavKitty' });
console.log(pranavkitty.name);

kittySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
}
pranavkitty.save(function (err, pranavkitty) {
    if (err){return console.error(err);}
    pranavkitty.speak();
});