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
		const newArr = [];
		list.map((item) => {
			const newItem = item[item.length - 1];
			if (newItem.url || (newItem.response && newItem.response.data.imageUrl)) {
				newArr.push({
					url: newItem.url || newItem.response.data.imageUrl.url,
					type: newItem.type || "image",
				});
			}
			return null;
		});
		this.setState({
			list: newArr,
		});
	};
	_renderItem = (itemNode, item, index) => {
		return (
			<div key={`item-${index}`} className="introduction-option">
				{itemNode}
				<div className="introduction-text" style={item.position}>
					<div>
						{item.textArr &&
							item.textArr.map((value, ind) => {
								return (
									<div
										className="introduction-text-value"
										key={`value-${ind}`}
										style={value.textStyle}
									>
										{value.text}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		);
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
				{list.map((item, index) => {
					if (item.type.indexOf("video") > -1) {
						return this._renderItem(<VideoCom url={item.url} />, item, index);
					} else {
						return this._renderItem(
							<Image width={"100vw"} src={item.url} />,
							item,
							index
						);
					}
				})}
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
