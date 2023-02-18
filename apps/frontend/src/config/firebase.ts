// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDT0DksOruNvwBTIOpJp9lH8byR2ITnz1U',
  authDomain: 'sanita-b07ee.firebaseapp.com',
  projectId: 'sanita-b07ee',
  storageBucket: 'sanita-b07ee.appspot.com',
  messagingSenderId: '687764617798',
  appId: '1:687764617798:web:9a8882cc7f35d7e9622847',
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
