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
		res.sendFIle("/public/form.html", {root: __dirname})
})

app.listen( port, () == console.log(`Example app listening on port ${port}`));
import logo from './logo.svg';
import './App.css';
var firebase = require('firebase');
require('firebase/database');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxhbNah2ZHxDfGVUSEDSgA1bnc7zqTXiM",
  authDomain: "anotherone98.firebaseapp.com",
  databaseURL: "https://anotherone98.firebaseio.com",
  projectId: "anotherone98",
  storageBucket: "anotherone98.appspot.com",
  messagingSenderId: "909298385013",
  appId: "1:909298385013:web:e07a352a38800a3cba783c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var adaRef = firebase.database().ref("blog-posts");

console.log(adaRef);
