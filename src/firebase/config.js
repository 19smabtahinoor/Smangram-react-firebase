import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAM_X2Uw-jy6jdC9tPE7uTBs34-LUkJwTs",
    authDomain: "smangram-smabtahinoor.firebaseapp.com",
    projectId: "smangram-smabtahinoor",
    storageBucket: "smangram-smabtahinoor.appspot.com",
    messagingSenderId: "503285117039",
    appId: "1:503285117039:web:9a992b3408a936c8669d9a",
    measurementId: "G-MV2M1FW7YV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp}