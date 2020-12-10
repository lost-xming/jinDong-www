import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import router from "./../../router/index";
import logo2 from "./../../assets/logo_2.png";
import "./index.less";
class Header extends Component {
	static propTypes = {};
	static defaultProps = {};
	render() {
		console.log(this.props);
		const { match = {} } = this.props;
		const { path = "" } = match;
		return (
			<div className="header">
				<img
					src={logo2}
					style={{ width: "1.6rem", marginRight: "0.2rem" }}
					alt="logo"
				/>
				{router.map((item, index) => {
					return (
						<NavLink
							exact={item.path === "/"}
							key={`router-${index}`}
							to={item.path}
							className={`header-item ${path === item.path ? "active" : ""}`}
						>
							{item.title}
						</NavLink>
					);
				})}
			</div>
		);
	}
}

export default withRouter(Header);
