const React     = require('react');
const ReactDOM  = require('react-dom');

var objOne = {
    name: 'Ankit',
    location: 'Jamshedpur'
};

var objTwo = {
    age: 20,
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate App</h1>,
    document.getElementById('app')
);