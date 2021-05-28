import { renderChildren } from "@/router";

const loginUrl = "/user/login";

function Index(props) {
	const { history, location } = props;

	const isLogin = true;

	if (!isLogin && location.pathname !== loginUrl) {
		console.log("跳转login");
		history.replace(loginUrl);
		return;
	}

	return renderChildren(props);
}

export default Index;
