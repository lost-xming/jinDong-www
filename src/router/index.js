import asyncComponent from "../components/asyncComponent";
import Home from "../app/home/index";
const Product = asyncComponent(() => {
	return import("../app/product/index");
});
const Introduction = asyncComponent(() => {
	return import("../app/introduction/index");
});
const Info = asyncComponent(() => {
	return import("../app/info/index");
});

const News = asyncComponent(() => {
	return import("../app/news/index");
});

const NewsInfo = asyncComponent(() => {
	return import("../app/news/detail");
});

const routes = [
	{
		path: "/",
		name: "home",
		title: "首页",
		component: Home,
		exact: true,
	},
	{
		title: "顶部悬浮产品介绍",
		name: "setting",
	},
	{
		path: "/product",
		name: "product",
		title: "产品中心",
		component: Product,
	},
	{
		path: "/introduction",
		name: "introduction",
		title: "了解锦东",
		component: Introduction,
	},
	{
		path: "/info",
		name: "info",
		notRender: true,
		component: Info,
	},
	{
		path: "/news",
		name: "news",
		notRender: true,
		component: News,
	},
	{
		path: "/newsInfo/:id",
		name: "newsInfo",
		notRender: true,
		component: NewsInfo,
	},
	{
		isMenu: true,
		title: "服务支持",
		name: "fuwu",
		menus: [
			{
				path: "/info",
				title: "公司简介",
			},
			{
				path: "/news",
				title: "新闻中心",
			},
		],
	},
];

export default routes;
