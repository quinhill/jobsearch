const companyReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RESEARCH':
      return [action.company, ...state];
    case 'CREATE_RESEARCH_ERROR':
      return action.err;
    case 'GET_COMPANIES':
      return [...state, action.company];
    default:
      return state;
  }
}

export default companyReducer;