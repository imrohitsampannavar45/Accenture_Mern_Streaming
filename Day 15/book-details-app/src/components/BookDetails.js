// src/components/BookDetails.js
import React from 'react';
import { connect } from 'react-redux';

const BookDetails = ({ book }) => {
    if (!book) {
        return <div>Select a book to see the details.</div>;
    }

    return (
        <div>
            <h2>Book Details</h2>
            <p>Book Name: {book.name}</p>
            <p>Price: {book.price}</p>
          
        </div>
    );
};

const mapStateToProps = (state) => {
    const book = state.bookStore.books.find(b => b.id === state.bookStore.selectedBookId);
    return { book };
};

export default connect(mapStateToProps)(BookDetails);
