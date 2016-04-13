var homeContainerBgImage = require("../images/pattern.svg");

var styles = {
	mainHeaderBlock: {
		backgroundColor: "#FF7E00",
		borderBottom: "1px solid #EB4828",
		margin: "0",
		padding: "10px"
	},
	mainHeader: {
		margin: "0",
		padding: "0",
		color: "white"
	},
	mainTextBox: {
		width: "200px",
		float: "left",
		marginRight: "10px"
	},
	right: {
		float: "right"
	},
	centered: {
		margin: "0 auto",
		float: "none"
	},
	centeredVertical: {
		position: "relative",
		top: "50%",
		transform: "translateY(-70%)"
	},
	homeContainerBg: {
		backgroundImage: "url(" + homeContainerBgImage + ")",
		backgroundSize: "cover",
		height: "100vh",
		marginBottom: "0px"
	},
	homeTextBox: {
		width: "200px",
		margin: "0 auto",
		float: "none"
	},
	homeHeader: {
		color: "white",
	},
	topSpace: {
		marginTop: "10px"
	}
};

module.exports = styles;