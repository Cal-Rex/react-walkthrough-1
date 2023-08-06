import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input id='id-name' name="name" type="text"></input>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default ControlledForm