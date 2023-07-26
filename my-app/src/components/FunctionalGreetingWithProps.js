import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    // shows the parameters in props, listed as Key: value pairs
    return <h1>Hello, {props.greeting}, {props.name} created this function, and he is {props.age}</h1>;
}

export default FunctionalGreetingWithProps;

