// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDuOi_wi20sicWot63RV8ky423jsg5Bar4",
//   authDomain: "udemy-vue-firebase-bd0ef.firebaseapp.com",
//   projectId: "udemy-vue-firebase-bd0ef",
//   storageBucket: "udemy-vue-firebase-bd0ef.appspot.com",
//   messagingSenderId: "502315536288",
//   appId: "1:502315536288:web:eec2396b9ef0e77cbc9ec5"
// };

// firebase.initilizeApp(firebaseConfig);

// const projectFirestore = firebase.firestore();

// export { projectFirestore };



// ----------------------------------------------------------

// https://www.udemy.com/course/build-web-apps-with-vuejs-firebase/learn/lecture/23585702#questions/15762332
// https://gist.github.com/prateek951/a687c16170a2fb21f16e4126e1669d15

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuOi_wi20sicWot63RV8ky423jsg5Bar4",
  authDomain: "udemy-vue-firebase-bd0ef.firebaseapp.com",
  projectId: "udemy-vue-firebase-bd0ef",
  storageBucket: "udemy-vue-firebase-bd0ef.appspot.com",
  messagingSenderId: "502315536288",
  appId: "1:502315536288:web:eec2396b9ef0e77cbc9ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

// export firestore
export { projectFirestore, timestamp }