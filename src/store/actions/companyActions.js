export const createCompany = company => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('companies').add({
        ...company,
        createdAt: new Date(),
        authorId
      }).then(() => {
        dispatch({ type: 'STORE_COMPANY', company });
      }).catch((err) => {
      dispatch({ type: 'CREATE_COMPANY_ERROR', err })
    })
  }
}