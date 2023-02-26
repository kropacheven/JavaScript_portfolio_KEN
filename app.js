// ----------------------------------------   1. Initializing the app
const express = require('express');
const data = require('./data.json').projects;

const app = express();

// ----------------------------------------  2. Setting view engine to pug
app.set('view engine', 'pug');
//app.use('/static', express.static('public'));

// ----------------------------------------  3. Setting static server:
app.use( '/static', express.static('public') );

// ----------------------------------------  4. Setting app routes

// a. Main page route:
app.get('/', (req, res) => {
    res.render('index', { data } );
});

// b. About page route:
app.get('/about', (req, res) => {
    res.render('about')
});

// c. Dynamic projects routes:

// Project # - (from 0 t0 4)
//let id = 4;

app.get('/project/:id', (req, res) => {
    //res.locals.project_name = data[0].project_name;
    //res.locals.project_desc = data[0].description;
    let id = req.params.id;
    //console.log(id);
    res.render('project', {project_name: data[id].project_name, project_desc: data[id].description, live_link: data[id].live_link, github_link: data[id].github_link, project_techs: data[id].technologies, project_img: data[id].img_urls });
});


// ------------------   5. Error handling:
// a. 404 error handler:
app.use( (req, res, next) => {
    const err = new Error('Sorry. Not Found...');
    err.status = 404;
    next(err);
});

// b. Global error handler:
app.use( (err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});



// ------------------   6. Starting server, app is listening on port 3000 and logs the port at the terminal console( with nodeman)
app.listen(3000, () => {
    console.log('The app is running at localhost 3000');
});