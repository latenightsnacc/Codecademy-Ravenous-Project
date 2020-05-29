import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    // componentDidMount () {
    //     console.log(this.props)
    // }
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}

export default BusinessList;