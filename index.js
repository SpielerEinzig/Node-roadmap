const mongoose = require('mongoose');
const express = require('express');
const todoRoute = require('./routes/todo-routes');

const app = express();

mongoose.set('strictQuery', false);

const dbUri = 'mongodb+srv://SpielerEinzig:XNw2QSBoX3E3BSpn@learnnode.eopudxi.mongodb.net/todo-app?retryWrites=true&w=majority';
mongoose.connect(dbUri).then((result) => {
    app.listen(3000);
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error);
});


app.use(express.urlencoded({extended: true}));


app.use(todoRoute);


//Error message for wrong endpoint
app.use((req, res) => {
    const message = ({"messgae": "You tapped the wrong endpoint"});

    res.json(message);

    res.end();
});