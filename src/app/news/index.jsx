import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank, List } from "antd-mobile";
import banner3 from "./../../assets/banner3.jpg";
import logo from "./../../assets/logo.png";
import "./index.less";
const { Item } = List;
const { Brief } = Item;
export default class News extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		showButtomT: false,
		newsList: [
			{
				img: logo,
				link: "https://mp.weixin.qq.com/s/jV4ZyAlRO9zr4AvdNXU7Qg",
				timer1: "2020-10",
				timer2: "25",
				title: "厨余垃圾怎么处理？",
				desc:
					"要说现在居民在生活中都有的一项烦恼，大概就是垃圾分类了。要说家庭垃圾里，最让人嫌弃的垃圾是啥?如果厨余垃圾排第二，没有垃圾敢排第一...",
			},
			{
				img: logo,
				link: "https://mp.weixin.qq.com/s/QVlQ0obJ1PH-FxuSUJuiVQ",
				timer1: "2020-10",
				timer2: "29",
				title: "核维斯厨余垃圾处理器",
				desc:
					"目前垃圾处理器简介及弊端1927年美国人约翰.汉默斯发明了世界上第一台锤击式垃圾处理器，很快的在西方国家得到流行与使用。但是由于东西方饮食文化的差异，导致此产品在中国水土不服，其在运行过程中由于工作原理原因，锤头极易被绕死，锤击噪音大，易卡机...",
			},
		],
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
		const { showButtomT, newsList } = this.state;
		return (
			<div className="news-box">
				<Header />
				<WingBlank>
					<img
						src={banner3}
						style={{ width: "100%", marginBottom: 30 }}
						alt="banner"
					/>
					<div className="textContent">
						<span>新闻中心</span>
					</div>
					<List className="news-list">
						{newsList.map((item, index) => {
							return (
								<Item
									thumb={
										<img
											src={item.img}
											style={{ width: "1rem", height: "1rem" }}
											alt="logo"
										/>
									}
									key={`news-${index}`}
									align="top"
									extra={
										<span
											style={{ fontSize: "0.36rem" }}
										>{`${item.timer1}-${item.timer2}`}</span>
									}
									multipleLine
									onClick={() => {}}
								>
									<a href={item.link}>
										<div className="news-item">
											<span className="news-item-title">{item.title}</span>
											<Brief>
												<span className="news-content">{item.desc}</span>
											</Brief>
										</div>
									</a>
								</Item>
							);
						})}
					</List>
				</WingBlank>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
