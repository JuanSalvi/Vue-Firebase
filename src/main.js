import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDY4VmE7fpJA1CWqKsZXA5QuS9jqg5ahxw",
  authDomain: "to-dosalvi.firebaseapp.com",
  projectId: "to-dosalvi",
  storageBucket: "to-dosalvi.appspot.com",
  messagingSenderId: "415551208434",
  appId: "1:415551208434:web:36b08a8d90261a3654896b",
  measurementId: "G-BC84WKWTB2"
};


firebase.initializeApp(firebaseConfig)
var storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, storage };

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
      const usuarioActivo ={
        email: user.email,
        uid: user.uid
      }
     store.dispatch('detectarUsuario', usuarioActivo)
     console.log(usuarioActivo)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectarUsuario', user)
    // User is signed out
    // ...
  } 
});

createApp(App).use(store).use(router).mount('#app')

