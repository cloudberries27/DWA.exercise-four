const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyAxhbNah2ZHxDfGVUSEDSgA1bnc7zqTXiM",
  authDomain: "anotherone98.firebaseapp.com",
  databaseURL: "https://anotherone98.firebaseio.com",
  projectId: "anotherone98",
  storageBucket: "anotherone98.appspot.com",
  messagingSenderId: "909298385013",
  appId: "1:909298385013:web:e07a352a38800a3cba783c"
};

const firestoreDatabase = firebase.intializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];
db.collection('blog-posts').get()
  .then(blogPosts => {
    blogPosts.forEach(docs=>{
      posts.push(docs.data());
    });
  })
  .catch(err => {
    console.log('errpr', err);
  });

router.get('/', (req, res) => {
  res.send(posts);
})
