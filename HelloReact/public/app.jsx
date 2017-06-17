var Greeter = React.createClass({
    render : () => {
        return (
            <div>
                <h1>Hello React!</h1>
                <h2>This is my first react app..</h2>
                <p>This is form component</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);