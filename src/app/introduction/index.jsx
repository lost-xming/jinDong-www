import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { Image, BackTop } from "antd";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { ArrowUpOutlined } from "@ant-design/icons";
import VideoCom from "@/components/video/index";
import "./index.less";
class Introduction extends Component {
	static propTypes = {
		getData: Proptypes.func,
	};
	static defaultProps = {
		getData: () => {},
	};
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			// dataArr: [
			// 	{
			// 		url:
			// 			"https://jd-buc-img.oss-cn-shenzhen.aliyuncs.com/introduction1.mp4",
			// 		isVideo: true,
			// 		position: {
			// 			// 上
			// 			flexDirection: "column",
			// 			paddingTop: "30px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字第一行",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 			{
			// 				text: "描述文字第二行",
			// 				textStyle: {
			// 					fontSize: "20px",
			// 				},
			// 			},
			// 		],
			// 	},
			// 	{
			// 		url: require("./../../assets/introduction1.jpg").default,
			// 		position: {
			// 			// 下
			// 			flexDirection: "column-reverse",
			// 			paddingBottom: "40px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字第一行",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 			{
			// 				text: "描述文字第二行",
			// 				textStyle: {
			// 					fontSize: "20px",
			// 				},
			// 			},
			// 		],
			// 	},
			// 	{
			// 		url: require("./../../assets/introduction2.jpg").default,
			// 		position: {
			// 			// 上
			// 			// flexDirection: "column",
			// 			// paddingTop: '30px',
			// 			// 右
			// 			// justifyContent: "flex-end",
			// 			// paddingRight: "30px",
			// 			// 下
			// 			// flexDirection: "column-reverse",
			// 			// paddingBottom: "40px",
			// 			// 左
			// 			paddingLeft: "40px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字第一行",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 			{
			// 				text: "描述文字第二行",
			// 				textStyle: {
			// 					fontSize: "20px",
			// 				},
			// 			},
			// 		],
			// 	},
			// 	{
			// 		url: require("./../../assets/introduction3.jpg").default,
			// 		position: {
			// 			// 右
			// 			justifyContent: "flex-end",
			// 			paddingRight: "30px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字第一行",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 			{
			// 				text: "描述文字第二行",
			// 				textStyle: {
			// 					fontSize: "20px",
			// 				},
			// 			},
			// 		],
			// 	},
			// 	{
			// 		url: require("./../../assets/introduction4.jpg").default,
			// 		position: {
			// 			paddingLeft: "40px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字第一行",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 			{
			// 				text: "描述文字第二行",
			// 				textStyle: {
			// 					fontSize: "20px",
			// 				},
			// 			},
			// 		],
			// 	},
			// 	{
			// 		url: require("./../../assets/introduction5.jpg").default,
			// 		position: {
			// 			// 下
			// 			flexDirection: "column-reverse",
			// 			paddingBottom: "40px",
			// 		},
			// 		textArr: [
			// 			{
			// 				text: "描述文字",
			// 				textStyle: {
			// 					fontSize: "40px",
			// 				},
			// 			},
			// 		],
			// 	},
			// ],
		};
	}
	componentDidMount() {
		this.initData();
	}
	initData = async () => {
		const { getData } = this.props;
		const { list } = await getData();
		this.setState({
			list,
		});
	};
	render() {
		const { list } = this.state;
		return (
			<div
				className="introduction-box"
				id="handelDocID"
				style={{ maxHeight: "calc(100vh)", overflowY: "auto" }}
			>
				<Header />
				<div className="introduction-content">
					{list.map((item, index) => {
						return (
							<div
								key={`item-${index}`}
								className={`introduction-option ${
									item.length > 1 ? "introduction-option2" : ""
								}`}
							>
								{item.map((it, i) => {
									if (it.type.indexOf("image") > -1) {
										return (
											<Image
												key={`home-${index}-item-${i}`}
												width={`${item.length > 1 ? "50%" : "100%"}`}
												style={{
													paddingRight:
														item.length > 1 && i !== item.length - 1
															? "5px"
															: 0,
													paddingLeft:
														item.length > 1 && i === item.length - 1
															? "5px"
															: 0,
												}}
												src={it.response && it.response.data.imageUrl.url}
											/>
										);
									}
									if (it.type.indexOf("video") > -1) {
										return (
											<VideoCom
												key={`home-${index}-item-${i}`}
												url={it.response && it.response.data.imageUrl.url}
											/>
										);
									}
								})}
							</div>
						);
					})}
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
const mapDispatch = (dispatch) => {
	return {
		getData: dispatch.introductionStore.getData,
	};
};
const mapState = (state) => {
	return {};
};
export default connect(mapState, mapDispatch)(Introduction);
