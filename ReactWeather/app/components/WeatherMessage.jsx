const React = require('react');

const WeatherMessage = React.createClass({
    render: function() {
        var {temp, location} = this.props;
        return (
            <h4>It's {temp}C in {location}</h4>
        );
    }
});

module.exports = WeatherMessage;