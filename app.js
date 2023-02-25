// ----------------------------------------   1. Initializing the app
const express = require('express');
const data = require('./data.json').projects;
console.log(data[0]);
//const path = require('path');

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
    console.dir(data);
});

// b. About page route:
app.get('/about', (req, res) => {
    res.render('about')
});

// c. Dynamic projects routes:
// Project #1 - 

let index = 4;

app.get('/project', (req, res) => {
    //res.locals.project_name = data[0].project_name;
    //res.locals.project_desc = data[0].description;
    res.render('project', {project_name: data[index].project_name, project_desc: data[index].description, live_link: data[index].live_link, github_link: data[index].github_link, project_techs: data[index].technologies, project_img: data[index].img_urls });
});


// (based on the id of the project that render a customized version of the Pug project template to show off each project):



// ------------------   5. Starting server, app is listening on port 3000 and logs the port at the terminal console( with nodeman)
app.listen(3000, () => {
    console.log('The app is running at localhost 3000');
});