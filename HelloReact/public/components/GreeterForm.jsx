var React = require('react');

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

module.exports = GreeterForm;