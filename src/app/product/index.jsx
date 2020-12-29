import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Image, BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import VideoCom from "@/components/video/index";
import "./index.less";
class Product extends Component {
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
			<div key={`item-${index}`} className="product-option">
				{itemNode}
				<div className="product-text" style={item.position}>
					<div>
						{item.textArr &&
							item.textArr.map((value, ind) => {
								return (
									<div
										className="product-text-value"
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
				className="product-box"
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
		getData: dispatch.productStore.getData,
	};
};
const mapState = (state) => {
	return {};
};
export default connect(mapState, mapDispatch)(Product);
