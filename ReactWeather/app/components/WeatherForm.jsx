const React = require('react');

const WeatherForm = React.createClass({
    render: function() {
        return (
            <div>
                <form action="">
                    <input type="text"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;