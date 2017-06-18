var React = require('react');
var GreeterMessage  = require('./GreeterMessage');
var GreeterForm     = require('./GreeterForm');

var Greeter = React.createClass({

    // Setting default props
    getDefaultProps : function() {
        return {
            name : 'React',
            message : 'This is the default message from component'
        };
    },
    // Get initial state of the component
    getInitialState : function() {
        return {
            name : this.props.name,
            message : this.props.message
        }
    },

    // Define onButtonClick function
    handleNewData : function(updates) {
        this.setState(updates);
    },
    render : function() {
        // Pulling props via 'this.props' objects
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;