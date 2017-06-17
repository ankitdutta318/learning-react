var Greeter = React.createClass({

    // Setting default props
    getDefaultProps : function() {
        return {
            name : 'React',
            message : 'This is the default message from component'
        };
    },
    // Define onButtonClick function
    onButtonClick : function(e) {
        e.preventDefault();
        
        // Using ref to fetch the values. refs is an object and we've a name attribute to it.
        var name = this.refs.name.value;
        alert(name);
    },
    render : function() {
        // Pulling props via 'this.props' objects
        var name = this.props.name;
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