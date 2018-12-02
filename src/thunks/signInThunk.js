import { isLoading, hasErrored, signIn } from '../actions';
import { db } from '../firebase';

const signInThunk = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const userQuery = await db.collection('users').doc(uid);
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