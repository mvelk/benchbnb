import { LOGIN,
         LOGOUT,
         SIGNUP,
         receiveCurrentUser,
         receiveErrors } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => next => action => {
  const errorsCallback = (err) => {
    dispatch(receiveErrors(err.responseJSON));
  };

  const successCallback = (user) => {
    dispatch(receiveCurrentUser(user));
  };

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorsCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorsCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
