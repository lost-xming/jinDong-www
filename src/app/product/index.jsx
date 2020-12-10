import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank } from "antd-mobile";
import ProductImage from "components/product/index";
import banner2 from "./../../assets/banner2.jpg";
import "./index.less";

export default class Product extends Component {
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
			<div className="product-box">
				<Header />
				<WingBlank>
					<img
						src={banner2}
						style={{ width: "100%", marginBottom: 30 }}
						alt="banner"
					/>
					<div className="textContent">
						<span>产品中心</span>
					</div>
				</WingBlank>
				<ProductImage />
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
