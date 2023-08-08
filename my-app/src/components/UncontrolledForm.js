import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();

    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>Your Name:</label>
                        <input ref={this.inputName} id='id-name' name="name" type="text"></input>
                    </div>
                    <div>
                        <label htmlFor='id-category'>Category:</label>
                        <select ref={this.inputCategory} id="id-category" name="category">
                            <option value="I1">Issue 1</option>
                            <option value="I2">Issue 2</option>
                            <option value="I3">Issue 3</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea ref={this.inputComments} id="id-comments" name="comments" />
                    </div>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm