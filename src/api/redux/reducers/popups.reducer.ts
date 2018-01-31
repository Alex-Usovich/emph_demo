import { ACTIONS } from '../actions/actions';

export const popups =
  (state = { createNote: false }, action) => {
    switch(action.type) {
      case ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_TOGGLE:
        return {
          ...state,
          createNote: !state.createNote
        };
      case ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_ON:
        return {
          ...state,
          createNote: true
        };
      case ACTIONS.POPUPS_ACTIONS.POPUP_CREATE_NOTE_OFF:
        return {
          ...state,
          createNote: false
        };
      default:
        return state;
    }
  };
