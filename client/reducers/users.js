const initialState = {
  isFetchinglist: false,
  fetchingListError: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state;

    case 'DELETE_USER':
      return state;

    case 'UPDATE_USER':
      return state;

    case 'USER_ERROR':
      return state;

    case 'LOGOUT_USER':
      return state;

    default:
      return state;
  }
};

export default usersReducer;
