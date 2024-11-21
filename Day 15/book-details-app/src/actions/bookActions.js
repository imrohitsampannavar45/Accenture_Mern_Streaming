// src/actions/bookActions.js
export const SELECT_BOOK = 'SELECT_BOOK';

export const selectBook = (bookId) => ({
    type: SELECT_BOOK,
    payload: bookId,
});
