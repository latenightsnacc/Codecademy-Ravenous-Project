import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_math',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

    renderSortByOptions() {
        return sortByOptions.keys(sortByOptions);
    }
    render() {
        return
    }
}