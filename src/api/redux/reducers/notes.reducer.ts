import { ACTIONS } from '../actions/actions';

export const notes =
  (state = { isOpened : false }, action) => {
    switch (action.type) {
      case ACTIONS.NOTES_ACTIONS.TOGGLE_NOTE:
        return {
          ...state,
          isOpened  : !state.isOpened,
          noteId    : action.payload.noteId
        };
      case ACTIONS.NOTES_ACTIONS.NOTE_ON:
          return {
            ...state,
            isOpened  : true,
            noteId    : action.payload.noteId
          };
      case ACTIONS.NOTES_ACTIONS.NOTE_OFF:
          return {
            ...state,
            isOpened  : false,
            noteId    : undefined
          };
      default:
        return state;
    }
  };
