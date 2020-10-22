const initialState = {
  email: null,
  id: null,
  token: null,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      return {
        ...state,
        email: action.email,
        id: action.id,
        token: action.token,
      };
    case 'SIGNOUT_USER':
      return {
        ...state,
        email: action.email,
        id: action.id,
        token: action.token,
      };
    default:
      return state;
  }
};

export default usersReducer;
