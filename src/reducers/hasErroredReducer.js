const hasErrored = (state = null, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.error;
    default:
      return state;
  }
}

export default hasErrored;