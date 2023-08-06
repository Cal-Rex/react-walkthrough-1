import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: '',
            comments: ''
        }
    }

    // handleNameChange = (event) => {
    //     let newValue = event.target.value
    //     console.log(newValue)
    //     this.setState({
    //         name: newValue
    //     })
    // }

    handleChange = (event) => {
        const {name, value} = event.target
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your Name:</label>
                        <input value={this.state.name} onChange={this.handleChange} id='id-name' name="name" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor='id-category'>Category:</label>
                        <select value={this.state.category} onChange={this.handleChange} id="id-category" name="category">
                            <option value="I1">Issue 1</option>
                            <option value="I2">Issue 2</option>
                            <option value="I3">Issue 3</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea value={this.state.comments} onChange={this.handleChange} id="id-comments" name="comments" />
                    </div>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }

}

export default ControlledForm