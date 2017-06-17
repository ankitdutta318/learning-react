var Greeter = React.createClass({

    // Setting default props
    getDefaultProps : function() {
        return {
            name : 'React',
            message : 'This is form component'
        };
    },
    render : function() {
        // Pulling props via 'this.props' objects
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <h2>This is my first react app..</h2>
                <p>{message}</p>
            </div>
        );
    }
});

// Set variables(any type) as inputs for props
var firstName = 'Ankit';
var myMessage = 'Hey there! This is cruxbreaker.'

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,        // Passing a prop into a component(Similar to adding a new HTML attribute)
    document.getElementById('app')
);