// Initializing the app:
const express = require('express');
const app = express();

// Setting view engine to pug:
app.set('view engine', 'pug');

// Setting app routes:
app.get('/', (req, res) => {
    res.send()
});

// Starting server, app is listening on port 3000 and logs the port at the terminal console( with nodeman):
app.listen(3000, () => {
    console.log('The app is running at localhost 3000');
});