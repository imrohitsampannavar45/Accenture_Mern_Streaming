// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/books/:id" element={<BookDetails />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
