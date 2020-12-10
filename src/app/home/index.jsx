import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { Carousel, WingBlank, Flex, Icon } from "antd-mobile";
import banner1 from "./../../assets/banner1.jpg";
import banner2 from "./../../assets/banner2.jpg";
import banner3 from "./../../assets/banner3.jpg";
import ProductImage from "components/product/index";
import "./index.less";
import "assets/iconfont.css";

export default class Home extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		sliderImg: [banner1, banner2, banner3],
		newArr: [
			{
				timer: "2020/11/06",
				text: "无缝液晶拼接屏的种类",
			},
			{
				timer: "2020/10/06",
				text: "互动触摸一体机是什么？它有哪些功能？",
			},
			{
				timer: "2020/09/06",
				text: "立式广告机怎么分屏？",
			},
		],
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
		const { sliderImg, newArr, showButtomT } = this.state;
		return (
			<div className="home-box">
				<Header />
				<div className="slider">
					<Carousel autoplay infinite>
						{sliderImg.map((item, index) => {
							return (
								<img
									src={item}
									alt="banner"
									key={`silder-${index}`}
									className="slider-item-img"
								/>
							);
						})}
					</Carousel>
				</div>
				<div className="textContent">
					<span>业务范围</span>
				</div>
				<div className="flex-option">
					<Flex>
						<Flex.Item className="flex-item">
							<div className="item-box">
								<span className="iconfont icon-icon" />
							</div>
							<div>展览展示</div>
						</Flex.Item>
						<Flex.Item className="flex-item">
							<div className="item-box">
								<span className="iconfont icon-iconrenwu" />
							</div>
							<div>公关活动</div>
						</Flex.Item>
						<Flex.Item className="flex-item">
							<div className="item-box">
								<span className="iconfont icon-zuanshi" />
							</div>
							<div>商业租凭</div>
						</Flex.Item>
						<Flex.Item className="flex-item">
							<div className="item-box">
								<span className="iconfont icon-guanyuwomen" />
							</div>
							<div>关于我们</div>
						</Flex.Item>
					</Flex>
				</div>
				<div className="textContent">
					<span>关于我们</span>
				</div>
				<div className="index-desc">
					<WingBlank>
						<div className="desc-img" alt="" />
						<div className="desc-text">
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
				</div>
				<div className="textContent">
					<span>产品图片</span>
				</div>
				<ProductImage />
				<div className="option-title">
					<div className="textContent">
						<span>新闻动态</span>
					</div>
					<div className="show-more">
						查看更多 <Icon type="right" size="md" />
					</div>
				</div>
				<div className="news-option">
					{newArr.map((item, index) => {
						return (
							<div className="new-item" key={`new-${index}`}>
								<div className="new-left">
									<div className="new-left-timer">{item.timer}</div>
									<div className="new-left-text">{item.text}</div>
								</div>
								<div className="new-right">
									<div className={`new-right-img new-img${index + 1}`} />
								</div>
							</div>
						);
					})}
				</div>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
