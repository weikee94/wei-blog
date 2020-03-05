import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUkYIdGNxBm-kckDWP1YZSKBOmO9OENBo",
  authDomain: "my-blog-2018.firebaseapp.com",
  databaseURL: "https://my-blog-2018.firebaseio.com",
  projectId: "my-blog-2018",
  storageBucket: "my-blog-2018.appspot.com",
  messagingSenderId: "974357428439",
  appId: "1:974357428439:web:32a48e19fed1174de65892"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
