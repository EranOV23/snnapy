import React from 'react';
import {connect} from 'react-redux';
import {getAllLocations} from '../../actions/creators';
import Address from './address';


class AddressesList extends React.Component {
    constructor(props){
        super(props);
        this.props.getAllLocations();
    }

    renderAddress(address, i){
        return (<Address address={address} key={i}/>)
    }

    render() {
        return (
            <ul className="locations-list">
                {this.props.locations.map( (address, i) => this.renderAddress(address, i) )}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
        locations: state.data.locations
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllLocations: () => dispatch(getAllLocations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressesList)
