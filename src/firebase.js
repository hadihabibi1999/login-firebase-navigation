
import firebase from 'firebase';

const config = {  
    apiKey: "AIzaSyAC3JZg2Y59ZW-vLFgi2p4-ud028cfeS8Q",
    authDomain: "signeup-cb4ee.firebaseapp.com",
    databaseURL: "https://signeup-cb4ee.firebaseio.com",
    projectId: "signeup-cb4ee",
    storageBucket: "signeup-cb4ee.appspot.com",
    messagingSenderId: "9862996194"
    }; 
   const fire = firebase.initializeApp(config);
        
 export default fire;