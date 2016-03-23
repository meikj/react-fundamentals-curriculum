var React = require("react");
var styles = require("../styles");

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<header className="page-header" style={styles.mainHeaderBlock}>
					<form style={styles.right}>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="St. George, Utah"
								style={styles.mainTextBox} />
							<button
								className="btn btn-md btn-success"
								type="submit"
								style={styles.right}>
								Get Weather
							</button>
						</div>
					</form>
					<h1 style={styles.mainHeader}>Weather App</h1>
				</header>
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;