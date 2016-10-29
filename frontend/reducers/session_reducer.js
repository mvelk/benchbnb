import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(state.action) {
    case RECEIVE_CURRENT_USER:
      let currentUser = { currentUser: action.user, errors: [] };
      newState = merge({}, state, currentUser);
      return newState;
    case RECEIVE_ERRORS:
      let errors = { currentUser: {}, errors: action.errors };
      newState = merge({}, state, errors);
      return newState;
    case LOGOUT:
      return { currentUser: {}, errors: [] };
    default:
      return state;
  }
};

export default SessionReducer;
