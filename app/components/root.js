import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';

import NavBar from './nav/NavBar';
import ErrorMessage from './error-message/ErrorMessage';
import addressesList from './locations/addressesList';
import shippingForm from './shippingForm/shippingForm';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null, 
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      error: error,
      errorInfo: errorInfo
    })  
  }

  render() {
    if(this.state.errorInfo){
      return(
        <ErrorMessage error={this.state.error} errorInfo={this.state.errorInfo}/>
      )
    }

    else return (
      <div>

        <Route path="/:pageTitle" component={NavBar}/>
        <Route exact path="/" render={ () => <Redirect to="/addresses"/> }/>
        <Route exact path="/addresses" component={addressesList}/>
        <Route exact path="/addresses/add" component={shippingForm}/>

      </div>
    )
  }
}

export default withRouter(Root)
