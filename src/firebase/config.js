import firebase from 'firebase'
import 'firebase/auth'
import "firebase/firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAMi7lHpfAY1nmKnzksdYpAuGovCfbpWbQ",
  authDomain: "olx-clone-37969.firebaseapp.com",
  projectId: "olx-clone-37969",
  storageBucket: "olx-clone-37969.appspot.com",
  messagingSenderId: "185272551680",
  appId: "1:185272551680:web:c7770af2e80c265f958be5",
  measurementId: "G-RPK33GNX6F"
};




 export default firebase.initializeApp(firebaseConfig)
