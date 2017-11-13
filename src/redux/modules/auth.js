// types
const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const LOGOUT = 'auth/LOGOUT';

const CHECK_TOKEN_FROM_LOCALSTORAGE = 'auth/CHECK_TOKEN_FROM_LOCALSTORAGE';

// actions
const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  username,
  password,
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

export const logout = () => ({ type: LOGOUT });

const checkTokenFromLocalStorage = () => ({ type: CHECK_TOKEN_FROM_LOCALSTORAGE });

// reducers
const initialState = {
  isFetching: false,
  isAuthenticated: false,
  error: '',
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: false,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

// selectors
export const selectToken = state => state.auth.token;

// export
export default auth;
export const types = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_TOKEN_FROM_LOCALSTORAGE,
};
export const actions = {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  checkTokenFromLocalStorage,
};
