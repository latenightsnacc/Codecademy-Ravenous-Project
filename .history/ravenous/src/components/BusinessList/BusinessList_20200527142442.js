import React from 'react';
import './Business.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.prop.businesses.map()}
            </div>
        );
    }
}

export default BusinessList;