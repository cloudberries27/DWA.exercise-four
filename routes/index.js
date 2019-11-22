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

if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig);
}

let posts = [];
db.collection('blog-posts').get()
  .then(blogPosts => {
    blogPosts.forEach(docs=>{
      posts.push(docs.data());
    });
  })
  .catch(err => {
    console.log('error', err);
  });

router.get('/', (req, res) => {
  res.send(posts);
})


let articleRef = db.collection('blog-posts');
let query = articleRef.where('Author', '==', 'Joe').get()
  .then(post => {
    if (post.empty) {
      console.log('does not exist.');
      return;
    }

    post.forEach(docs => {
      console.log(docs.id, '=>', docs.data());
    });
  })
  .catch(err => {
    console.log('error', err);
  });

module.exports = router;
