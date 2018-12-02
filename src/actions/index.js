export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
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

export const getCompanies = company => ({
  type: 'GET_COMPANIES',
  company
});
