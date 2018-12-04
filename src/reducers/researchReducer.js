const companies = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RESEARCH':
      return [action.research, ...state];
    case 'CREATE_RESEARCH_ERROR':
      console.log(action.err)
      return action.err;
    case 'GET_COMPANIES':
      return [...state, action.company];
    default:
      return state;
  }
}

export default companies;