var React = require("react");
var Forecast = require("../components/Forecast");
var axios = require("axios");

var ForecastContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true
		}
	},
	componentDidMount: function() {
		var cityState = this.props.routeParams.cityState;
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityState + "&type=accurate&APPID=810e15a1be1f492317e817bff2a8fdff")
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.err(response);
			});
	},
	render: function() {
		return <Forecast />
	}
});

module.exports = ForecastContainer;