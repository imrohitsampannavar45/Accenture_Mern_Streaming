// src/reducers/index.js
import { combineReducers } from 'redux';
import bookReducer from './bookReducers';

const rootReducer = combineReducers({
    bookStore: bookReducer,
});

export default rootReducer;
