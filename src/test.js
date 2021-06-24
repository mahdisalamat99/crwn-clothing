import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('b8ycCgVAXxWAIclPVKRS').collection('carItems').doc('hRd0f0dgikk91F4cOTBk');
firestore.doc('/users/b8ycCgVAXxWAIclPVKRS/carItems/hRd0f0dgikk91F4cOTBk');
firestore.collection('/users/b8ycCgVAXxWAIclPVKRS/carItems');