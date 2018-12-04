import { combineReducers } from 'redux';
import isLoading from './isLoadingReducer';
import hasErrored from './hasErroredReducer';
import user from './userReducer';
import companies from './researchReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  user,
  companies,
  firestore: firestoreReducer
})

export default rootReducer;