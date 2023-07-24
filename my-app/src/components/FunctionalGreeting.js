import React from "react";
// gives access to everything that react can do
// not mandatory to put in code in latest ver of react
// but adding it makes apps backwards-compatible

// basic function
// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

// same function but as an arrouw function
const FunctionalGreeting = () => <h1>Hello from React!</h1>;

// with function created, it now needs to be exported 
// so it can be imported elsewhere
// Exporting is not implicit like in django/python
export default FunctionalGreeting;
// the term "default" here means the function
// can be imported at the other end by any name
// but it is traiditionlly good practice
// to try and keep names the same to read code
// easier.

// with the function exported, it can be imported in App.js
