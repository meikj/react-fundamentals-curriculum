var React = require("react");
var styles = require("../styles");

var Home = React.createClass({
	render: function() {
		return (
			<div style={styles.homeContainerBg}>
				<div className="container text-center" style={styles.centeredVertical}>
					<h1 style={styles.homeHeader}>Enter a City and State</h1>
					<form style={styles.centered}>
						<input
							type="text"
							className="form-control"
							placeholder="St. George, Utah"
							style={styles.homeTextBox} />
						<button
							className="btn btn-md btn-success"
							type="submit"
							style={styles.topSpace}>
							Get Weather
						</button>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Home;