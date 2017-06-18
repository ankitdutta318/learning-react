var GreeterMessage = React.createClass({
    render : function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit : function(e) {
        e.preventDefault();

        var name = this.refs.name.value;

        if(name.length > 1) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render : function() {
        return (
            <form action="" onSubmit={this.onFormSubmit}>  {/*onSubmit attribute that built-in to React*/} 
                <input type="text" ref="name"/>             {/*ref : custom attribute used by React*/}
                <button>Set name</button>
            </form>
        );
    }
});


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
            name : this.props.name
        }
    },

    // Define onButtonClick function
    handleNewName : function(name) {
        this.setState({
            name : name
        });
    },
    render : function() {
        // Pulling props via 'this.props' objects
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

// Set variables(any type) as inputs for props
var firstName = 'Ankit';
var myMessage = 'Hey there! This is cruxbreaker.'

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,            // Passing a prop into a component(Similar to adding a new HTML attribute)
    document.getElementById('app')
);