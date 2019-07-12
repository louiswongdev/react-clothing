import firebase from 'firebase/app';
import 'firebase/firestore'; // our db
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2xzg2-C7ufhjs9tOemdFhW7jyXjHQy44",
  authDomain: "crwn-corp.firebaseapp.com",
  databaseURL: "https://crwn-corp.firebaseio.com",
  projectId: "crwn-corp",
  storageBucket: "",
  messagingSenderId: "584338379682",
  appId: "1:584338379682:web:1101fed77ab7ba09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup whenever we use GoogleAuthProvider for authentication and signin
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;