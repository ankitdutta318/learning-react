var React           = require('react');
var ReactDOM        = require('react-dom');
var Greeter         = require('Greeter');

// Set variables(any type) as inputs for props
var firstName = 'Ankit';
var myMessage = 'Hey there! This is cruxbreaker.'

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,            // Passing a prop into a component(Similar to adding a new HTML attribute)
    document.getElementById('app')
);