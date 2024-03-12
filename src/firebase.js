import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyB8ONEXS3MyLhdvhOX_vKEUKQeTJBfyk4Q",
    authDomain: "novedades-policia.firebaseapp.com",
    projectId: "novedades-policia",
    storageBucket: "novedades-policia.appspot.com",
    messagingSenderId: "30802840685",
    appId: "1:30802840685:web:b48665f44f2be34235c364"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

export {storage, firebase as default};