import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank } from "antd-mobile";
import banner1 from "./../../assets/banner1.jpg";
import "./index.less";

export default class Introduction extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		showButtomT: false,
	};
	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({
				showButtomT: true,
			});
		}, 3000);
	}
	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}
	render() {
		const { showButtomT } = this.state;
		return (
			<div className="introduction-box">
				<Header />
				<WingBlank>
					<img
						src={banner1}
						style={{ width: "100%", marginBottom: 30 }}
						alt="banner"
					/>
					<div className="introduction-text">
						<p>
							策划：倾听客户的传播需求与目的，并将规划成适宜在空间中呈现的设计策略。
						</p>
						<p>
							设计：拥有多位创意全面经验丰富的资深设计师，提供展览，活动策划，巡展，办公商业空间等全方位创意设计。
						</p>
						<p>
							执行：精确务实的执行力，并不断探索新的材质和施工工艺加以运用，将客户的利益发挥较大的效果。
						</p>
						<p>
							服务：专人专属的服务模式，针对个别专案采取团队服务模式，为客户提供专业细微的服务品质。
						</p>
					</div>
				</WingBlank>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
