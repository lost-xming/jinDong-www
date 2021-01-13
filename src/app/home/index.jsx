import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Image, BackTop } from "antd";
import VideoCom from "@/components/video/index";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./index.less";
class Home extends Component {
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
		this.setState({
			list,
		});
	};
	render() {
		const { list } = this.state;
		return (
			<div className="home-box" id="handelDocID">
				<Header />
				<div className="home-content">
					{list.map((item, index) => {
						return (
							<div
								key={`home-${index}`}
								className={`index-option ${index !== 0 ? "index-video2" : ""}`}
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
		getData: dispatch.homeStore.getData,
	};
};
const mapState = (state) => {
	return {};
};
export default connect(mapState, mapDispatch)(Home);
