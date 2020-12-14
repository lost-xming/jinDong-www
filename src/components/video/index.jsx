import React, { Component } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
class Footer extends Component {
	static propTypes = {
		url: PropTypes.string,
	};
	static defaultProps = {
		url: "",
	};
	render() {
		const { url } = this.props;
		return (
			<ReactPlayer
				width={"100vw"}
				height="700"
				loop={true}
				muted={true}
				url={url}
				playing={true}
				controls={true}
				playsinline={true}
				webkit-playsinline="true"
				x5-playsinline="true"
				x5-video-player-type="h5"
				x5-video-player-fullscreen="true"
			/>
		);
	}
}

export default Footer;
