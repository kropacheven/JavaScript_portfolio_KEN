// 1. Initializing the app
const express = require('express');
const app = express();

// 2. Setting view engine to pug
app.set('view engine', 'pug');

// 2. Setting app routes

// a. Main page route:
app.get('/', (req, res) => {
    res.render('index');
});

// b. About page route:
app.get('/about', (req, res) => {
    res.send('<h2>This is the about page of the app.</h2>')
});

// c. Dynamic projects routes:
// (based on the id of the project that render a customized version of the Pug project template to show off each project):



// 3. Starting server, app is listening on port 3000 and logs the port at the terminal console( with nodeman)
app.listen(3000, () => {
    console.log('The app is running at localhost 3000');
});