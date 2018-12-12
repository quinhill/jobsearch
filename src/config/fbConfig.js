import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD_SRYqQs5eOC5a2mIuFFGQsNZMx1RfPzU',
  authDomain: "jobsearch-8f1f2.firebaseapp.com",
  databaseURL: "https://jobsearch-8f1f2.firebaseio.com",
  projectId: "jobsearch-8f1f2",
  storageBucket: "jobsearch-8f1f2.appspot.com",
  messagingSenderId: "138538988994"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;