import { ACTIONS } from '../actions/actions';

export const user =
  (state = {}, action) => {
    switch (action.type) {
      case ACTIONS.USER_ACTIONS.USER_HAS_LOGGED_IN:
        return {
          ...state,
          email : action.payload.email,
          uid   : action.payload.uid
        };
      case ACTIONS.USER_ACTIONS.USER_HAS_LOGGED_OUT:
        return {
          ...state,
          email : null,
          uid   : null
        };
      default:
        return state;
    }
  };
