// // import express from 'express';
// // import { engine } from 'express-handlebars';
// const express = require('express');
// var exphbs = require('express-handlebars');


// // import path from 'path';
// // import blog from './routes/blog.js'
// const blog = require('./routes/blog.js');
// const app = express();
// const port = 3000;



// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// // app.use(express.static(path.join(__dirname, "static")))
// // app.use('/', require(path.join(__dirname, 'routes/blog.js')));
// app.use('/', blog);

// app.listen(port, ()=>{
//     console.log(`Blog app is listining at http://localhost:${port}`)
// })


const express = require('express')
const app = express();
const {engine} = require('express-handlebars');
const blog = require('./routes/blog.js');
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', blog);
app.listen(port, ()=>{
    console.log(`Server is starting at port http://localhost:${port} `);
} )