import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ReactPlayer from "react-player";
import { Image, BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./index.less";
export default class Home extends Component {
	static propTypes = {};
	static defaultProps = {};
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}
	componentWillUnmount() {}
	render() {
		return (
			<div
				className="home-box"
				id="handelDocID"
				style={{ maxHeight: "calc(100vh)", overflowY: "auto" }}
			>
				<Header />
				<div className="index-option">
					<ReactPlayer
						width={"100vw"}
						height="760"
						loop={true}
						muted={true}
						url={require("./../../assets/index.mp4").default}
						playing={true}
						playsinline={true}
						webkit-playsinline="true"
						x5-playsinline="true"
						x5-video-player-type="h5"
						x5-video-player-fullscreen="true"
					/>
				</div>
				<div className="index-option">
					<Image
						width={"100vw"}
						src={`${
							require("./../../assets/index-option1.jpg").default
						}?${Date.now()}`}
					/>
				</div>
				<div className="index-video index-video2">
					<ReactPlayer
						width={"100vw"}
						height="760"
						loop={true}
						muted={true}
						url={require("./../../assets/index2.mp4").default}
						playing={true}
						playsinline={true}
						webkit-playsinline="true"
						x5-playsinline="true"
						x5-video-player-type="h5"
						x5-video-player-fullscreen="true"
					/>
				</div>
				<div className="index-option">
					<Image
						width={"100vw"}
						src={`${
							require("./../../assets/index-option2.jpg").default
						}?${Date.now()}`}
					/>
				</div>
				<div className="index-option">
					<Image
						width={"100vw"}
						src={`${
							require("./../../assets/index-option3.jpg").default
						}?${Date.now()}`}
					/>
				</div>
				<div className="index-option index-list">
					<Image
						className="index-list-item"
						width={"50vw"}
						height={"450px"}
						src={`${
							require("./../../assets/index-option4-1.jpg").default
						}?${Date.now()}`}
					/>
					<Image
						className="index-list-item"
						width={"50vw"}
						height={"450px"}
						src={`${
							require("./../../assets/index-option4-1.jpg").default
						}?${Date.now()}`}
					/>
					<Image
						className="index-list-item"
						width={"50vw"}
						height={"450px"}
						src={`${
							require("./../../assets/index-option4-1.jpg").default
						}?${Date.now()}`}
					/>
					<Image
						className="index-list-item"
						width={"50vw"}
						height={"450px"}
						src={`${
							require("./../../assets/index-option4-1.jpg").default
						}?${Date.now()}`}
					/>
				</div>
				<BackTop
					visibilityHeight={300}
					target={() => document.getElementById("handelDocID")}
				>
					<div className="backUp">
						<ArrowUpOutlined className="backUp-icon" />
					</div>
				</BackTop>
				<Footer />
			</div>
		);
	}
}
