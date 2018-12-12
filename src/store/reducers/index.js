import { combineReducers } from 'redux';
import authReducer from './authReducer';
import companyReducer from './companyReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  companies: companyReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;