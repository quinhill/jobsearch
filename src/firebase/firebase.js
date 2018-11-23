import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { GoogleKey } from '../APIKey';

const config = {
  apiKey: GoogleKey,
  authDomain: "jobsearch-8f1f2.firebaseapp.com",
  databaseURL: "https://jobsearch-8f1f2.firebaseio.com",
  projectId: "jobsearch-8f1f2",
  storageBucket: "",
  messagingSenderId: "138538988994"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const auth = firebase.auth();

export {
  auth,
  firebase,
  db
};
