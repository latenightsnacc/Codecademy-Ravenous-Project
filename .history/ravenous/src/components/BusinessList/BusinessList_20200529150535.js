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
                {this.props.businesses.map()}
            </div>
        );
    }
}

export default BusinessList;