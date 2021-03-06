import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_math',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
        <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    render() {
        return
    }
}