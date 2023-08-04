import React from "react";

class StatefulGreeting extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            counter: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("previous state:", prevState);
            console.log("previous props:", prevProps);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    }


    incrementClick() {
        this.setState((prevState, prevProps) => {
            console.log("previous state:", prevState);
            console.log("previous props:", prevProps);
            return {
                counter: prevState.counter + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementClick()}>count: {this.state.counter}</button>
            </div>
        )
    }
}

export default StatefulGreeting;