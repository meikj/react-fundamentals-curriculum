var React = require("react");
var styles = require("../styles");
var PromptContainer = require("../containers/PromptContainer");

function Home() {
	return (
		<div style={styles.homeContainerBg}>
			<div className="container text-center" style={styles.centeredVertical}>
				<h1 style={styles.homeHeader}>Enter a City and State</h1>
				<PromptContainer styleType="home" />
			</div>
		</div>
	)
}

module.exports = Home;