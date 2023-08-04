import React from "react";


class NavBarSimple extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            spanText: "Hello, Guest!",
            buttonText: "Log in",
        }
    }

    loggingIn() {
        this.setState((prevState, prevProps) => {
            return {
                spanText: prevState.spanText === "Hello, Guest!" ? "Welcome back, User!" : "Hello, Guest!",
                buttonText: prevState.buttonText === "Log in" ? "Log Out" : "Log in",
            }
        });
    }

    render() {
        return (
            <div>
                <h1 className="css.NavBar">My Gallery</h1>
                <div>
                    <span>{this.props.spanText}</span>
                    <button onClick={() => this.loggingIn()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple;