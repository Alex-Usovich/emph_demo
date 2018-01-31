import { combineReducers }  from '../helpers/combineRecucers';
import { combinedReducers } from './reducers/combined.reducer';
import { user }             from './reducers/user.reducer';
import { layout }           from './reducers/layout.reducer';
import { notes }            from './reducers/notes.reducer';
import { popups }           from './reducers/popups.reducer';

const reducersToCombine = { combinedReducers, user, layout, notes, popups };

export const rootReducer = combineReducers(reducersToCombine);
