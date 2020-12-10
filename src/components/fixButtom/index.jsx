import React, { Component, Fragment } from "react";
import { Grid, Modal, Button, List } from "antd-mobile";
import gongzhonghaoImg from "./../../assets/gongzhonghao.jpg";
import mapImg from "./../../assets/map.png";
import "./index.less";
const { alert, prompt } = Modal;
class FixedFooter extends Component {
	static propTypes = {};
	static defaultProps = {};
	state = {
		iconData: [
			{
				icon: "icon-dianhua",
				text: `电话`,
			},
			{
				icon: "icon-gongzhonghao",
				text: `公众号`,
			},
			{
				icon: "icon-liuyan",
				text: `留言`,
			},
			{
				icon: "icon-tubiaozhizuomoban",
				text: `地图`,
			},
		],
		activeIndex: 0,
		modalFlag: false,
	};
	itemClick = (item, index) => {
		if (index !== 2) {
			this.lookModel(item, index);
		} else {
			this.inputModal();
		}
	};
	lookModel = (item, index) => {
		if (index === 0) {
			alert(item.text, "0769-22225669", [{ text: "关闭" }]);
		} else if (index === 1) {
			this.setState({
				activeIndex: index,
				modalFlag: true,
			});
		} else if (index === 3) {
			this.setState({
				activeIndex: index,
				modalFlag: true,
			});
		}
	};
	inputModal = () => {
		prompt(
			"留言",
			"亲，感谢你对我们的留言！",
			[
				{
					text: "取消",
					onPress: (value) => {},
				},
				{
					text: "确定",
					onPress: (value) => {},
				},
			],
			"default",
			null,
			["请输入想说的内容"]
		);
	};
	render() {
		const { iconData, activeIndex } = this.state;
		return (
			<Fragment>
				<div className="fixedFooter">
					<Grid
						data={iconData}
						columnNum={4}
						hasLine={false}
						renderItem={(dataItem, index) => (
							<div
								onClick={() => {
									this.itemClick(dataItem, index);
								}}
							>
								<span className={`iconfont ${dataItem.icon}`} />
								<div className="fixed-text">{dataItem.text}</div>
							</div>
						)}
					/>
				</div>
				<Modal
					popup
					visible={this.state.modalFlag}
					onClose={() => {
						this.setState({
							modalFlag: false,
						});
					}}
					animationType="slide-up"
				>
					<List>
						<img
							src={activeIndex === 1 ? gongzhonghaoImg : mapImg}
							style={{
								width: "10rem",
								paddingTop: "1rem",
								paddingBottom: "1rem",
							}}
							alt={activeIndex === 1 ? "公众号二维码" : "地图"}
						/>
						<List.Item>
							<Button
								type="primary"
								onClick={() => {
									this.setState({
										modalFlag: false,
									});
								}}
							>
								关闭
							</Button>
						</List.Item>
					</List>
				</Modal>
			</Fragment>
		);
	}
}

export default FixedFooter;
