import * as firebase from 'firebase'
import { exp } from 'react-native-reanimated';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDL0N5cj_Q_EZuGwMEAUuTxDQWYOA7e8aI",
    authDomain: "willy-app-84ffa.firebaseapp.com",
    projectId: "willy-app-84ffa",
    storageBucket: "willy-app-84ffa.appspot.com",
    messagingSenderId: "1069690195808",
    appId: "1:1069690195808:web:d36780dc80e348ec479805"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()