import React, { Component } from "react";
import Header from "components/header/index";
import Footer from "components/footer/index";
import FixedFooter from "components/fixButtom/index";
import { WingBlank, Card } from "antd-mobile";
import banner3 from "./../../assets/banner3.jpg";
import logo from "./../../assets/logo.png";
import gzhImg from "./../../assets/gongzhonghao.jpg";
import mapImg from "./../../assets/map.png";
import "./index.less";
export default class News extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		showButtomT: false,
		cardArr: [
			{
				title: "地图",
				text: "东莞市东坑镇XX街道XXX号",
				content: "",
				img: mapImg,
				logo,
			},
			{
				title: "电话",
				text: "",
				content: "0769-22225669",
				img: "",
				logo,
			},
			{
				title: "微信公众号",
				text: "",
				content: "",
				img: gzhImg,
				logo,
			},
			{
				title: "微信号",
				text: "",
				content: "",
				img: gzhImg,
				logo,
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
		const { showButtomT, cardArr } = this.state;
		return (
			<div className="about-box">
				<Header />
				<WingBlank>
					<img
						src={banner3}
						style={{ width: "100%", marginBottom: 60 }}
						alt="banner"
					/>
					<div className="textContent">
						<span>联系我们</span>
					</div>
					<div className="about-text">
						<p>
							2019年中国广东锦东电器研发团队发明了一种新型食物垃圾处理器，锦东2008年成立厨余垃圾处理器研发团队借鉴直升飞机传动原理，1927年美国约翰.汉默斯发明了世界上第一台锤击式垃圾处理器，很快的在西方国家得到流行与使用。
						</p>
						<p>
							但是由于东西方饮食文化的差异，导致此产品在中国水土不服，其在运行过程中由于工作原理原因，锤头极易被绕死，锤击噪音大，易卡机，容易烧损电机。
						</p>
						<p>
							由于颗粒大堵塞下水道，另外很多壳类、大骨头、长纤维蔬菜等垃圾极难处理。
							基于以上问题锦东电器研发团队颠覆美国发明原理构造，利用离心剪切原理，采用齿轮箱带动双刀盘正反向剪切垃圾。从而克服了锤击式的各种大大小小的毛病，处理速度快，颗粒小，基本涵盖所有的食物垃圾。此发明已经得到国家的发明专利认证。
						</p>
						<p>
							创新研发双向离心剪切原理，攻克食物垃圾处理器颗粒0.2mm、噪音60分贝、等多方面的技术难关，产品性能远超各进口品牌，励志成为国内最顶尖的厨余垃圾处理品牌。
						</p>
						<p>
							我们在中国的生产基地位于东莞，配备有全套的制造与检测设备，我们坚持"品质第一，用户至上"的理念，建立了一支强有力的的科研开发队伍，并与国内多家研究所建立密切的技术合作关系，开发高质量的产品和提供高品质的服务。我们遵循"精益求精，永无止境"的质量精神，不断提高改进产品质量,通过了CQC、CE欧盟等认证。
						</p>
						<p>公司地址：广东省东莞市松山湖中科创新广场E座804</p>
					</div>
					{cardArr.map((item, index) => {
						return (
							<Card className="about-card" key={`cars-${index}`}>
								<Card.Header
									title={item.title}
									thumb={
										<img
											src={item.logo}
											style={{ width: "0.8rem", height: "0.8rem" }}
											alt="logo"
										/>
									}
									extra={
										<span style={{ fontSize: "0.3rem" }}>{item.text}</span>
									}
								/>
								<Card.Body>
									<div>{item.content}</div>
									{item.img && (
										<img
											src={item.img}
											style={{ maxWidth: index === 0 ? "100%" : "3rem" }}
											alt="img"
										/>
									)}
								</Card.Body>
							</Card>
						);
					})}
				</WingBlank>
				<Footer />
				{showButtomT && <FixedFooter />}
			</div>
		);
	}
}
