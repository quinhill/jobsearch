import { isLoading, hasErrored, getCompanies } from '../actions';
import { db } from '../firebase';


const getCompaniesThunk = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const query = await db.collection('users').doc(uid).collection('research');
      const research = await query.get();
      const companies = research.docs.map(company => company.id);
      const companyResponse = await companies.map(async id => (
        await db.collection('users').doc(uid).collection('research').doc(id)
      ));
      const companyQueries = await Promise.all(companyResponse);
      const companyData = await companyQueries.map(company => {
        return company.get()
      });
      const dataArray = await Promise.all(companyData);
      dataArray.forEach(item => {
        dispatch(getCompanies(item.data()));
      })
      dispatch(isLoading(false))
      dispatch(hasErrored(null))
      
    } catch (error) {
      dispatch(hasErrored(error))
    }
  }
}

// const getCompaniesThunk = (uid) => {
//   return async (dispatch) => {
//     console.log(uid)
//     try {
//       console.log('doogie')
//       dispatch(isLoading(true));
//       const researchQuery = await db.collection('users').doc(uid);
//       console.log(researchQuery)
//       const companies = await researchQuery.get();
//       const companyNames = companies.docs.map(doc => (
//         doc
//       ))
//       console.log(companyNames);
//       dispatch(isLoading(false));
//       dispatch(hasErrored(null));
//       dispatch(getCompanies(companies))
//     } catch (error) {
//       console.log(error)
//       dispatch(hasErrored(error));
//     }
//   }
// }

export default getCompaniesThunk;