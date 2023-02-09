import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSuSuZOVJl2iIQx__lsPcVh-AD0Px8moE",
    authDomain: "netflix-clone-130eb.firebaseapp.com",
    projectId: "netflix-clone-130eb",
    storageBucket: "netflix-clone-130eb.appspot.com",
    messagingSenderId: "708558580072",
    appId: "1:708558580072:web:345e73a89a29b94099cedd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;