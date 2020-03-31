import * as firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyA-3g4qQJwoqtDqby_R6PKRIbgkNRxNrPs",
  authDomain: "wei-blog-11952.firebaseapp.com",
  databaseURL: "https://wei-blog-11952.firebaseio.com",
  projectId: "wei-blog-11952",
  storageBucket: "wei-blog-11952.appspot.com",
  messagingSenderId: "782074666092",
  appId: "1:782074666092:web:18c616d50aaba86e5f8c49",
  measurementId: "G-37K95CW8MW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
