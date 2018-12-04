export const storeResearchThunk = research => {
  return async ( 
    dispatch, 
    getState, { 
      getFirebase, 
      getFirestore 
    }) => {
    try {
      const firestore = await getFirestore();
      await firestore.collection('research').add({
        ...research,
        createdAt: new Date()
      })
      dispatch({ type: 'STORE_RESEARCH', research });
    } catch (err) {
      dispatch({ type: 'CREATE_RESEARCH_ERROR', err})
    }
  }
}