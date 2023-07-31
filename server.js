const express = require('express');
const app = express();

// create view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('Here');
    res.render('index', { text: "World" });
});

const userRouter = require('./routes/users');

// Any URL that starts with /users use the userRouter 
app.use('/users', userRouter);

app.listen(3000);