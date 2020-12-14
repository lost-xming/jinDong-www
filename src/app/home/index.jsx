import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import ReactPlayer from "react-player";
import { Image, BackTop } from "antd";
import VideoCom from "@/components/video/index";
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
					<VideoCom url="https://jd-buc-img.oss-cn-shenzhen.aliyuncs.com/index.mp4" />
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
					<VideoCom url="https://jd-buc-img.oss-cn-shenzhen.aliyuncs.com/index2.mp4" />
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
