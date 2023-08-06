import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'


export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log("constructor called")
      super(props)
    
      this.state = {
         greeting: "Hello!"
      }
    }

    updateGreeting = () => {
        console.log("Update Greeting Called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye!' : 'Hello!'
            }
        })
    }

    componentDidUpdate() {
        console.log("component updated")
    }

    render() {
        console.log("Render Called")
        return (
        <div>
            <h1>{this.state.greeting}</h1>
            <button onClick={this.updateGreeting}>update Greeting</button>
            <LifeCyclesCDUChild />
        </div>
        )
    }
}

export default LifeCyclesCDU