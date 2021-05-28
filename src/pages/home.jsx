import React from "react";
import { Button } from "antd";
import { useModel } from "@/models";

function Index() {
	const { state, dispatch } = useModel();

	const isCollapsed = state.global.isCollapsed;
	const btnLoading = state.loading["global/toggleCollapsedFunc"];

	return (
		<div>
			<div style={{ height: 200, backgroundColor: "#ddd", margin: 20 }}>欢迎使用</div>
			<div style={{ height: 200, backgroundColor: "#ddd", margin: 20 }}>欢迎使用</div>

			<Button
				onClick={() => {
					dispatch("global/toggleCollapsedFunc");
				}}
				loading={btnLoading}
			>
				toggle
			</Button>

			{isCollapsed ? "关闭！" : "打开！"}
		</div>
	);
}

export default Index;
