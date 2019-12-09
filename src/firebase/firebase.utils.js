import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyAbhP6UJBMsIOpkLa_yJIF0as9qAcF6a3I",
authDomain: "ecommerce-db-eb1e3.firebaseapp.com",
databaseURL: "https://ecommerce-db-eb1e3.firebaseio.com",
projectId: "ecommerce-db-eb1e3",
storageBucket: "ecommerce-db-eb1e3.appspot.com",
messagingSenderId: "667817773462",
appId: "1:667817773462:web:540c89ece2503e5868b5b7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

