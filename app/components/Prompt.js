var React = require("react");
var styles = require("../styles");
var PropTypes = React.PropTypes;

function Prompt(props) {
	return (
	<form
		style={props.styleType === 'main' ? styles.right : styles.centered}
		onSubmit={props.onSubmitCityState}>
		<input
			type="text"
			className="form-control"
			placeholder="Glasgow, UK"
			style={props.styleType === 'main' ? styles.mainTextBox : styles.homeTextBox}
			onChange={props.onUpdateCityState} />
		<button
			className="btn btn-md btn-success"
			type="submit"
			style={props.styleType === 'main' ? styles.right : styles.topSpace}>
			Get Weather
		</button>
	</form>
	)
}

Prompt.propTypes = {
	styleType: PropTypes.string.isRequired,
	onSubmitCityState: PropTypes.func.isRequired,
	onUpdateCityState: PropTypes.func.isRequired
}

module.exports = Prompt;