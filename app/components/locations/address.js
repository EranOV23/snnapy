import React from 'react';
import './addressesList.scss';

export default class Address extends React.Component {

    render(){
        return (
            <li>
                <div className="location">
                    <div className="content">
                        <h3>{this.props.address.firstName} {this.props.address.lastName}</h3>
                        <p>address: {this.props.address.address}</p>
                        <div className="info">
                            <p>zipCode: {this.props.address.zipCode}</p>
                            <p>city: {this.props.address.city}</p>
                            <p>email: {this.props.address.email}</p>
                            <p>phone: {this.props.address.phone}</p>
                            <p>notes: {this.props.address.notes}</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </li>
        )
    }
}


