import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { Image, BackTop, Card, Space } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./index.less";
const { Meta } = Card;
export default class Info extends Component {
	static propTypes = {};
	static defaultProps = {};
	constructor(props) {
		super(props);
		this.state = {
			cardArr: [
				{
					title: "Europe Street beat",
					desc: "www.instagram.com",
					src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
					href: "/newsInfo/5",
				},
				{
					title: "Europe Street beat",
					desc: "www.instagram.com",
					src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
					href: "/newsInfo/5",
				},
				{
					title: "Europe Street beat",
					desc: "www.instagram.com",
					src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
					href: "/newsInfo/5",
				},
				{
					title: "Europe Street beat",
					desc: "www.instagram.com",
					src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
					href: "/newsInfo/5",
				},
				{
					title: "Europe Street beat",
					desc: "www.instagram.com",
					src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
					href: "/newsInfo/5",
				},
			],
		};
	}
	componentDidMount() {}
	componentWillUnmount() {}
	onCardAction = (item) => {
		window.open(item.href);
	};
	render() {
		const { cardArr } = this.state;
		return (
			<div
				className="info-box"
				id="handelDocID"
				style={{ maxHeight: "calc(100vh)", overflowY: "auto" }}
			>
				<Header />
				<div className="info-bg">
					<Image
						width={"100vw"}
						src={require("../../assets/info-banner.jpg").default}
					/>
					<h3>公司概况</h3>
				</div>
				<div className="info-content">
					<div className="info-content-bg">
						<div className="info-conten-card">
							<div className="info-card-text">
								<h1>公司简介</h1>
								<p>Viomi的使命是通过IoT @ Home的概念重新定义未来的房屋。</p>
								<p>
									该公司已经开发了一个独特的IoT
									@Home平台，该平台包含一个创新的，支持IoT的智能家居产品生态系统，以及一系列补充性消费品和增值业务。该平台为进入消费者家庭提供了一个有吸引力的切入点，使消费者能够以直观和类人的方式与广泛的物联网产品进行智能交互，从而使日常生活更加便利，高效和愉快，同时使我们能够发展家庭用户群并捕获家庭环境中各种其他由场景驱动的消费事件
								</p>
							</div>
							<Space className="info-card-list" size={23}>
								{cardArr.map((item, index) => {
									return (
										<Card
											key={`card-${index}`}
											className="info-card-list-item"
											hoverable
											style={{ width: 240 }}
											onClick={() => this.onCardAction(item)}
											cover={<img alt="card" src={item.src} />}
										>
											<Meta title={item.title} description={item.desc} />
										</Card>
									);
								})}
							</Space>
						</div>
					</div>
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
