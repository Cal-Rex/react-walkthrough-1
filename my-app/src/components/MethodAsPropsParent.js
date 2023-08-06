import React, { Component } from 'react'
import MethodAsPropsChild from './MethodAsPropsChild'

export class MethodAsPropsParent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isLoaded: false,
        isLoggedIn: false,
    };
  }
  
  handleSignIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div>
        <MethodAsPropsChild 
          isLoggedIn={this.state.isLoggedIn}
          handleSignIn={this.handleSignIn}
          />
      </div>
    )
  }
}

export default MethodAsPropsParent