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

var getSource = {
    source: 'default'
}

router.get("/:id", (req, res)=>{
  let queryId = req.params.id;
	let docRef = db.collection("blog-posts").doc(queryId);
	docRef.get(getSource).then( doc => res.send(doc.data()))
	.catch (error => res.send(error));
});

module.exports = router;
