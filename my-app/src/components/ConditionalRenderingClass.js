import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: false,
      }
    }

  render() {
    return (
      <div>
        <h1>
            {this.state.isLoaded ? 'Data Loaded!' : 'Loading...'}
        </h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Welcome to the site, please finish the following steps:</p>
                    <ol>
                        <li>Confirm your Email</li>
                        <li>Complete your Profile</li>
                        <li>Subscribe to the Newsletter</li>
                    </ol>
                </div>
            ) : (
                <p>Please sign up</p>
            )}
      </div>
    )
  }
}

export default ConditionalRenderingClass