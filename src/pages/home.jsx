import React from "react";
import { Button, Checkbox, Row } from "antd";
import { useModel } from "@/models";

function Index() {
	const { state, dispatch, getLoading } = useModel();

	const isCollapsed = state.global.isCollapsed;
	const btnLoading = getLoading("global/toggleCollapsedFunc");

	return (
		<div>
			<div style={{ height: 200, backgroundColor: "#ddd", margin: 20 }}>欢迎使用</div>
			<div style={{ height: 200, backgroundColor: "#ddd", margin: 20 }}>欢迎使用</div>

			<Button type="primary" onClick={() => dispatch("global/toggleCollapsedFunc")} loading={btnLoading}>
				toggle
			</Button>

			{isCollapsed ? "关闭！" : "打开！"}

			<Row>
				<Checkbox>啦啦</Checkbox>
			</Row>
		</div>
	);
}

export default Index;
