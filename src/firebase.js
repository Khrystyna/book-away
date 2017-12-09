import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArJg5UJxa5p93vAJPhBGwVW2YlBYaLXXE",
  authDomain: "book-away.firebaseapp.com",
  databaseURL: "https://book-away.firebaseio.com",
  projectId: "book-away",
  storageBucket: "book-away.appspot.com",
  messagingSenderId: "454228788707"
};

firebase.initializeApp(config);

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;