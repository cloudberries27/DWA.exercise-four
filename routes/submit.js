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

const db = firebase.firestore();

const sampleData = {
	title: "Test",
	text: "It's cloudy today, I don't like it",
	author: "DUH ME"
}

router.get("/test", (req, res) => {
	db.collection("blog-posts").doc("test-doc").set(sampleData)
	.then(function() {
   		 console.log("Document successfully written!");
	}).catch(function(error) {
    		console.error("Error writing document: ", error);
	});
})

router.get("/", (req, res) => {
  let titleVal = req.query.title ? req.query.title : '';
  let textVal = req.query.text ? req.query.text : '';
  let authorVal = req.query.author ? req.query.author : '';
  db.collection("blog-posts")
    .add({
      title: titleVal,
      text: textVal,
      author: authorVal
    })
    .then(ref => res.send(ref))
    .catch(e => res.send(e))
})

module.exports = router;
