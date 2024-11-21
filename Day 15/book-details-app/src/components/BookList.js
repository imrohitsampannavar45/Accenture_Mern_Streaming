// src/components/BookList.js
import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/bookActions';
import { Link } from 'react-router-dom';

const BookList = ({ books, selectBook }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`} onClick={() => selectBook(book.id)}>
                            Book ID: {book.id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    books: state.bookStore.books,
});

const mapDispatchToProps = {
    selectBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
