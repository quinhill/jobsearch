const user = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return action.user;
    case 'SIGN_IN':
      return action.user;
    case 'SIGN_OUT':
      return {};
    default:
      return state;
  }
}

export default user;