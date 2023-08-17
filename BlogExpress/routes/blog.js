const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs.js');
// console.log(__dirname)
router.get('/', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../template/index.html'));
    res.render('home')
})

router.get('/blog', (req,res)=>{
    // res.sendFile(path.join(__dirname, '../template/index.html'));
    res.render('blogHome')
})

router.get('/blogpost/:slug', (req, res)=>{
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    console.log(myBlog);
    res.sendFile(path.join(__dirname, '../template/blogPage.html'))
})
 
module.exports = router; 