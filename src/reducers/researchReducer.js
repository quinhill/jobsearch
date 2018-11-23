const companies = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RESEARCH':
      return [action.research, ...state];
    default:
      return state;
  }
}

export default companies;