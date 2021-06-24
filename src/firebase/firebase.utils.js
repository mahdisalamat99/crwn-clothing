import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-KPW4XZgh4qteUFi0MaHHL9-6X2M26Z8",
    authDomain: "crwn-db-803aa.firebaseapp.com",
    projectId: "crwn-db-803aa",
    storageBucket: "crwn-db-803aa.appspot.com",
    messagingSenderId: "161434677991",
    appId: "1:161434677991:web:ff81304f678efddb49e842",
    measurementId: "G-7MW965WK0Y"
  };

  export const createUserProfileDocument = async (userAuth, additionalData )=>{
    if(!userAuth) return ;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;