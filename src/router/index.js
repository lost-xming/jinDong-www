import asyncComponent from "../components/asyncComponent";
import Home from "../app/home/index";
const Introduction = asyncComponent(() => {
	return import("./../app/introduction/index");
});
const Product = asyncComponent(() => import("./../app/product/index"));
const News = asyncComponent(() => import("./../app/news/index"));
const About = asyncComponent(() => import("./../app/about/index"));
const routes = [
	{
		path: "/",
		name: "home",
		title: "首页",
		component: Home,
		exact: true,
	},
	{
		path: "/introduction",
		name: "introduction",
		title: "公司简介",
		component: Introduction,
	},
	{
		path: "/product",
		name: "product",
		title: "产品中心",
		component: Product,
	},
	{
		path: "/news",
		name: "news",
		title: "服务支持",
		component: News,
	},
	{
		path: "/about",
		name: "about",
		title: "联系我们",
		component: About,
		// routes: [
		// 	// {
		// 	// 	path: "/new/",
		// 	// 	component: NewContent,
		// 	// }
		// ],
	},
];

export default routes;
