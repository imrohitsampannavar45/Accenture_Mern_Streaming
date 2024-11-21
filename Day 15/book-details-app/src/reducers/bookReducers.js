// src/reducers/bookReducer.js
import { SELECT_BOOK } from '../actions/bookActions';

const initialState = {
    books: [
        { id: 1, name: 'Book One', price: '$10' },
        { id: 2, name: 'Book Two', price: '$15' },
        { id: 3, name: 'Book Three', price: '$20'},
    ],
    selectedBookId: null,
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return {
                ...state,
                selectedBookId: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
