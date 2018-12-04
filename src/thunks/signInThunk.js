import { isLoading, hasErrored, signIn } from '../actions';
import fbConfig from '../config/fbConfig';

const signInThunk = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const userQuery = await fbConfig.collection('users').doc(uid);
      const user = await userQuery.get();
      dispatch(isLoading(false))
      dispatch(hasErrored(null))
      dispatch(signIn(user.data()))
    } catch (error) {
      dispatch(hasErrored(error))
    }
  }
}
  

export default signInThunk;