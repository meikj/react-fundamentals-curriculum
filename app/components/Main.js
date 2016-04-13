var React = require("react");
var styles = require("../styles");
var PromptContainer = require("../containers/PromptContainer");

function Main(props) {
	return (
		<div>
			<header className="page-header" style={styles.mainHeaderBlock}>
				<PromptContainer styleType="main" />
				<h1 style={styles.mainHeader}>Weather App</h1>
			</header>
			{props.children}
		</div>
	)
}

module.exports = Main;