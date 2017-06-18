var GreeterMessage = React.createClass({
    render : function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p><strong>Message: </strong>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit : function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 1) {
            this.refs.name.value = '';
            updates.name = name;
        }
        
        if(message.length > 4) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
        
    },
    render : function() {
        return (
            <form action="" onSubmit={this.onFormSubmit}>  {/*onSubmit attribute that built-in to React*/} 
                <div>
                    <input type="text" placeholder="Enter name" ref="name"/>             {/*ref : custom attribute used by React*/}
                </div>
                <div>
                    <textarea placeholder="Enter message" ref="message"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
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

// Set variables(any type) as inputs for props
var firstName = 'Ankit';
var myMessage = 'Hey there! This is cruxbreaker.'

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,            // Passing a prop into a component(Similar to adding a new HTML attribute)
    document.getElementById('app')
);