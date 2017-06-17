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
    onButtonClick : function(e) {
        e.preventDefault();
        
        // Using ref to fetch the values. refs is an object and we've a name attribute to it.
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';                  // Clearing the input field 

        if(typeof name === 'string' && name.length > 1) {       // Check for bad data
            this.setState({
                name : name
            });
        } else {
            alert('Name field empty or bad data! Try again.')
        }
    },
    render : function() {
        // Pulling props via 'this.props' objects
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                
                <form action="" onSubmit={this.onButtonClick}>  {/*onSubmit attribute that built-in to React*/}
                    
                    <input type="text" ref="name"/>             {/*ref : custom attribute used by React*/}
                    <button>Set name</button>
                </form>
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