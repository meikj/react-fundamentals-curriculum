var React = require("react");
var Prompt = require("../components/Prompt");
var PropTypes = React.PropTypes;

var PromptContainer = React.createClass({
	contextTypes: {
		router: PropTypes.object.isRequired
	},
	propTypes: {
		styleType: PropTypes.string.isRequired
	},
	getInitialState: function() {
		return {
			cityState: ''
		}
	},
	handleUpdateCityState: function(e) {
		this.state.cityState = e.target.value;
	},
	handleSubmitCityState: function(e) {
		console.log(this.state.cityState);
		console.log(this.context);
		this.context.router.push("/forecast/" + this.state.cityState);
	},
	render: function() {
		return (
			<Prompt
				styleType={this.props.styleType} 
				onUpdateCityState={this.handleUpdateCityState}
				onSubmitCityState={this.handleSubmitCityState} />
		)
	}
});

module.exports = PromptContainer;