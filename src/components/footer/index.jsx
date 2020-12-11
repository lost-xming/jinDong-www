import React, { Component } from "react";
import { Button, Image } from "antd";
import { withRouter } from "react-router";
import "./index.less";
class Footer extends Component {
	static propTypes = {};
	static defaultProps = {};
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					title: "全屋互联网家电",
					itemArr: [
						{
							title: "互联网空调",
							href: "1111",
						},
						{
							title: "互联网空调",
							href: "2222",
						},
						{
							title: "互联网空调",
							href: "3333",
						},
						{
							title: "互联网空调",
							href: "4444",
						},
					],
				},
				{
					title: "全屋互联网家电",
					itemArr: [
						{
							title: "互联网空调",
							href: "1111",
						},
						{
							title: "互联网空调",
							href: "2222",
						},
						{
							title: "互联网空调",
							href: "3333",
						},
						{
							title: "互联网空调",
							href: "4444",
						},
					],
				},
				{
					title: "全屋互联网家电",
					itemArr: [
						{
							title: "互联网空调",
							href: "1111",
						},
						{
							title: "互联网空调",
							href: "2222",
						},
						{
							title: "互联网空调",
							href: "3333",
						},
						{
							title: "互联网空调",
							href: "4444",
						},
					],
				},
				{
					title: "全屋互联网家电",
					itemArr: [
						{
							title: "互联网空调",
							href: "1111",
						},
						{
							title: "互联网空调",
							href: "2222",
						},
						{
							title: "互联网空调",
							href: "3333",
						},
						{
							title: "互联网空调",
							href: "4444",
						},
					],
				},
			],
		};
	}
	render() {
		const { list } = this.state;
		return (
			<div className="footer">
				<div className="footer-flex">
					{list.map((item, index) => {
						return (
							<div key={`item-${index}`} className="footer-flex-item">
								<h3>{item.title}</h3>
								{item.itemArr &&
									item.itemArr.map((value, ind) => {
										return (
											<div key={`value-${ind}`}>
												<Button
													type="link"
													onClick={() => {
														this.props.history.push(value.href);
													}}
													className="footer-flex-item-list"
												>
													{value.title}
												</Button>
											</div>
										);
									})}
							</div>
						);
					})}
					<div key="item-kefu" className="footer-flex-kefu">
						<h3>客服电话</h3>
						<div>0769-22225669</div>
						<h3>消费维权热线</h3>
						<div>0769-22225669</div>
						<h3>举报邮箱</h3>
						<div>0769-22225669</div>
						<h3>扫码进入锦东商城</h3>
						<div>
							<Image
								width={"100px"}
								src={`${
									require("./../../assets/gongzhonghao.jpg").default
								}?${Date.now()}`}
							/>
						</div>
					</div>
				</div>
				<div className="footer-desc">
					© 2020 jddianqi.cn 广东锦东电器科技有限公司 粤ICP备2020118823号
					粤公网安备 440300000000号
				</div>
			</div>
		);
	}
}

export default withRouter(Footer);
