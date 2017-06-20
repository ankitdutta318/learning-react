const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Jamshedpur',
            temp: 34
        }
    },
    handleSearch: function(location) {
        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp
            });
        }, (errorMessage) => {
            alert(errorMessage);
        });
    },
    render: function() {
        var {temp, location} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <div>
                    <WeatherForm onSearch={this.handleSearch}/>
                </div>
                <div>
                    <WeatherMessage location={location} temp={temp}/>
                </div>
            </div>
        );
    }
});

module.exports = Weather;