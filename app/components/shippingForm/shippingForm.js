import React from 'react';

export default class shippingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            zipCode: "",
            city: "",
            email: "",
            phone: "",
            notes: "",
        };
    }


    onChange(e){
            let value = e.target.value;
            this.setState({[e.target.name]: value});
    }



    render() {
        return (<form action="/api/order" method="post">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group required">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="firstName"
                                       name="firstName"
                                       placeholder="First Name"
                                       value={this.state.firstName}
                                       onChange={(e)=>this.onChange(e)}
                                       required autoFocus/>
                            </div>
                            <div className="form-group required">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="lastName"
                                       name="lastName"
                                       placeholder="Last name"
                                       value={this.state.lastName}
                                       onChange={(e)=>this.onChange(e)}
                                       required autoFocus/>
                            </div>
                            <div className="form-group required">
                                <label htmlFor="address">address</label>
                                <input type="text"
                                       className="form-control"
                                       id="address"
                                       name="address"
                                       placeholder="Address"
                                       value={this.state.address}
                                       onChange={(e)=>this.onChange(e)}
                                       required autoFocus/>
                            </div>

                            <div className="form-group required">
                                <label htmlFor="zipCode">zipCode</label>
                                <input type="number"
                                       className="form-control"
                                       id="zipCode"
                                       name="zipCode"
                                       placeholder="zipCode"
                                       value={this.state.zipCode}
                                       onChange={(e)=>this.onChange(e)}
                                       required autoFocus/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">city</label>
                                <input type="text"
                                       className="form-control"
                                       id="city" name="city"
                                       placeholder="city"
                                       value={this.state.city}
                                       onChange={(e)=>this.onChange(e)}
                                       autoFocus/>
                            </div>

                        </div>
                        <div className="col-sm-6">

                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input type="email"
                                       className="form-control"
                                       id="email" name="email"
                                       placeholder="email"
                                       value={this.state.email}
                                       onChange={(e)=>this.onChange(e)}
                                       autoFocus/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">phone</label>
                                <input type="number" max="9999999999"
                                       className="form-control"
                                       id="phone" name="phone"
                                       placeholder="phone"
                                       value={this.state.phone}
                                       onChange={(e)=>this.onChange(e)}
                                       autoFocus/>
                            </div>

                            <div className="form-group required">
                                <label htmlFor="notes">notes</label>
                                <textarea type="text" maxLength="500"
                                          className="form-control"
                                          rows={10}
                                          id="notes"
                                          name="notes"
                                          placeholder="notes"
                                          value={this.state.notes}
                                          onChange={(e)=>this.onChange(e)}
                                          required={false} autoFocus/>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <button type="submit"
                            className="btn btn-primary">
                        Save Address</button>

                </div>

            </form>
        )
    }
}