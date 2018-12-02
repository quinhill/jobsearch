const companies = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RESEARCH':
      return [action.research, ...state];
    case 'GET_COMPANIES':
      return [...state, action.company];
    default:
      return state;
  }
}

export default companies;