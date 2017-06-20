const React = require('react');

const WeatherMessage = ({temp, location}) => {
    return (
        <h4>It's {temp}C in {location}</h4>
    );
};

module.exports = WeatherMessage;