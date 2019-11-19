import React from 'react';
import './App.css';

const express = require('express');
const app =  express();
const port = process.env.PORT || 4000;
const path = require('path');

const indexRoute = require ('./routes/index.js');
const postsRoute =  require ('./routes/posts.js');
const submitRoute =  require ('./routes/submit.js');

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
app.use("/post", postsRoute);
app.use("/submit", submitRoute);

app.use("/submit-form", (req,res)=>{
		res.sendFIle("/public/form.html", {rest: __dirname})
})

app.listen( port, () == console.log(`Example app listening on port ${port}`));
