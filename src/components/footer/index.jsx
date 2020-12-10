import React, { Component } from "react";
import "./index.less";
import logoImg from "./../../assets/logo.png";
class Footer extends Component {
	static propTypes = {};
	static defaultProps = {};
	render() {
		return (
			<div className="footer">
				<div>24小时服务热线 0769-22225669</div>
				<div className="footer-desc">
					©2020 版权所有
					<img
						src={logoImg}
						style={{
							width: "0.4rem",
							marginLeft: "0.14rem",
							marginRight: "0.14rem",
							verticalAlign: "middle",
						}}
						alt="logo"
					/>
					广东锦东电器科技有限公司
				</div>
			</div>
		);
	}
}

export default Footer;
