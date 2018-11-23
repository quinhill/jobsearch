import { combineReducers } from 'redux';
import isLoading from './isLoadingReducer';
import hasErrored from './hasErroredReducer';
import user from './userReducer';
import companies from './researchReducer';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  user,
  companies
})

export default rootReducer;