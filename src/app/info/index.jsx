import React, { Component } from "react";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { Image, BackTop, Card, Space } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./index.less";
const { Meta } = Card;
class Info extends Component {
	static propTypes = {
		getData: Proptypes.func,
	};
	static defaultProps = {
		getData: () => {},
	};
	constructor(props) {
		super(props);
		this.state = {
			desc: [],
			news: [],
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
	componentDidMount() {
		this.initData();
	}
	initData = async () => {
		const { getData } = this.props;
		const data = await getData();
		const desc = data.info && data.info.length && data.info.split("<br  />");
		this.setState({
			desc,
			news: data.news,
		});
	};
	onCardAction = (item) => {
		window.open(item.link);
	};
	render() {
		const { desc, news } = this.state;
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
						preview={false}
						src={require("../../assets/info-banner2.jpg").default}
					/>
					{/* <h3>公司概况</h3> */}
				</div>
				<div className="info-content">
					<div className="info-content-bg">
						<div className="info-conten-card">
							<div className="info-card-text">
								<h1>公司简介</h1>
								{desc.map((item, index) => {
									return <p key={`info-${index}`}>{item}</p>;
								})}
							</div>
							<Space className="info-card-list" size={23}>
								{news.map((item, index) => {
									return (
										<Card
											key={`card-${index}`}
											className="info-card-list-item"
											hoverable
											style={{ width: 240 }}
											onClick={() => this.onCardAction(item)}
											cover={<img alt="card" src={item.url} />}
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

const mapDispatch = (dispatch) => {
	return {
		getData: dispatch.infoStore.getData,
	};
};
const mapState = (state) => {
	return {};
};
export default connect(mapState, mapDispatch)(Info);
