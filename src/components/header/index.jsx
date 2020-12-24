import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import router from "./../../router/index";
import { Popover, Menu, Tabs, Image, Divider, Button, Modal } from "antd";
import { RightOutlined, CustomerServiceFilled } from "@ant-design/icons";
import "./index.less";
const { TabPane } = Tabs;
class Header extends Component {
	static propTypes = {
		getData: Proptypes.func,
	};
	static defaultProps = {
		getData: () => {},
	};
	constructor(props) {
		super(props);
		this.state = {
			coKiingPath: "/",
			data: [],
			tabs: [],
		};
	}
	componentDidMount() {
		this.initData();
	}
	initData = async () => {
		const { getData } = this.props;
		const data = await getData();
		router.map((item) => {
			if (item.name === "home") {
				item.title = data.indexName;
			} else if (item.name === "setting") {
				item.title = data.setting;
			} else if (item.name === "product") {
				item.title = data.product;
			} else if (item.name === "introduction") {
				item.title = data.introduction;
			} else if (item.name === "fuwu") {
				item.title = data.news;
			}
			return null;
		});
		this.setState({
			tabs: data.pic || [],
			data: router,
		});
	};
	_renderRouter = (item) => {
		const { match = {} } = this.props;
		const { path = "" } = match;
		return (
			<div className="header-router-item" key={item.path}>
				<NavLink
					exact={item.path === "/"}
					key={item.path}
					to={item.path}
					className={`header-item ${path === item.path ? "active" : ""}`}
				>
					{item.title}
				</NavLink>
			</div>
		);
	};
	_renderModuleInfo = () => {
		Modal.info({
			title: <div style={{ fontSize: 20 }}>服务热线</div>,
			content: (
				<div style={{ fontSize: 14 }}>
					<div>客服电话</div>
					<div>0769-22225669</div>
					<div>消费维权热线</div>
					<div>0769-22225669</div>
					<div>举报邮箱</div>
					<div>0769-22225669</div>
				</div>
			),
			onOk() {},
		});
	};
	_renderPop = (item) => {
		const { tabs } = this.state;
		return (
			<div className="header-router-item" key={`router-${item.title}`}>
				<Popover
					content={
						<div className="header-prop" style={{ width: "100vw" }}>
							<Tabs tabPosition="left" className="header-prop-tabs">
								{tabs.map((item, index) => {
									return (
										<TabPane
											tab={
												<div className="header-prop-tab-title">
													{item.title} <RightOutlined />
												</div>
											}
											key={`tab-${index}`}
										>
											<Image height={300} width={600} src={item.url} />
										</TabPane>
									);
								})}
							</Tabs>
						</div>
					}
					placement="topRight"
					title={null}
					trigger="hover"
				>
					{item.title}
				</Popover>
			</div>
		);
	};
	_renderMenu = (item) => {
		return (
			<div
				className="header-menu header-router-item"
				key={`router-${item.title}`}
			>
				<div className="header-menu-title">
					{item.title}
					<div className="header-menu-list">
						<Menu>
							{item.menus.map((value, index) => {
								return (
									<Menu.Item
										key={`menu-${index}`}
										className="header-menu-list-item-text"
									>
										<NavLink key={value.path} to={value.path}>
											{value.title}
										</NavLink>
									</Menu.Item>
								);
							})}
						</Menu>
					</div>
				</div>
			</div>
		);
	};
	render() {
		const { coKiingPath, isModalVisible, data } = this.state;
		return (
			<div className="header">
				<div className="header-logo">
					<Button type="link" size="small">
						<img
							style={{ width: 40 }}
							src={require("./../../assets/logo.png").default}
						/>
						<span className="header-logo-name">锦东电器</span>
					</Button>
				</div>
				<div className="header-router">
					{data.map((item, index) => {
						if (!item.notRender) {
							if (item.path) {
								return this._renderRouter(item);
							} else if (!item.isMenu && !item.path) {
								return this._renderPop(item);
							} else if (item.isMenu) {
								return this._renderMenu(item);
							}
						}
					})}
				</div>
				<div className="header-user">
					<Image
						className="header-user-img"
						width={26}
						src={require("./../../assets/icon_cokiing.png").default}
					/>
					<NavLink
						key={`cokiing${coKiingPath}`}
						to={coKiingPath}
						className="header-coKiing"
					>
						<span className="header-user-name">CoKiing</span>
					</NavLink>
					<Divider type="vertical" className="header-user-vertical" />
					<div className="header-coKiing" onClick={this._renderModuleInfo}>
						<CustomerServiceFilled className="header-user-kefu" />
					</div>
				</div>
			</div>
		);
	}
}
const mapDispatch = (dispatch) => {
	return {
		getData: dispatch.headerStore.getData,
	};
};
const mapState = (state) => {
	return {};
};
export default connect(mapState, mapDispatch)(withRouter(Header));
