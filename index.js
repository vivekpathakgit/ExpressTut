const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))
app.get('/hello:name', (req, res)=>{
    res.send('Hello World!! '+req.params.name)
})
app.get('/about', (req,res)=>{
    // res.send('About')
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.json({vivek: 21})
})
app.listen(port, ()=>{
    console.log(`This app is listining at http://localhost:${port}`)
})


// earn money as much as you want!
 

