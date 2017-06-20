const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (errorMessage) => {
            this.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        var renderMessage = () => {
            if(isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        };

        return (
            <div>
                <h3>Weather Component</h3>
                <div>
                    <WeatherForm onSearch={this.handleSearch}/>
                </div>
                <div>
                    {renderMessage()}
                </div>
            </div>
        );
    }
});

module.exports = Weather;