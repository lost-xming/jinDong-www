import React, { Component } from "react";
import { WingBlank, Flex } from "antd-mobile";
import proImg1 from "./../../assets/img-1.png";
import proImg2 from "./../../assets/img-2.png";
import proImg3 from "./../../assets/img-3.png";
import proImg4 from "./../../assets/img-4.png";
import "./index.less";
class ProductImage extends Component {
	render() {
		return (
			<div className="product-image">
				<WingBlank>
					<Flex wrap="wrap">
						<div className="product-item">
							<img className="product-img" src={proImg1} />
						</div>
						<div className="product-item">
							<img className="product-img" src={proImg2} />
						</div>
						<div className="product-item">
							<img className="product-img" src={proImg3} />
						</div>
						<div className="product-item">
							<img className="product-img" src={proImg4} />
						</div>
					</Flex>
				</WingBlank>
			</div>
		);
	}
}
export default ProductImage;
