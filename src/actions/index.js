export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = bool => ({
  type: 'HAS_ERRORED',
  hasErrored: bool
});

export const signUp = user => ({
  type: 'SIGN_UP',
  user
})

export const signIn = user => ({
  type: 'SIGN_IN',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const storeResearch = research => ({
  type: 'STORE_RESEARCH',
  research
});

export const updateCompany = company => ({
  type: 'UPDATE_COMPANY',
  company
});

export const getCompanies = companies => ({
  type: 'GET_COMPANIES',
  companies
});
