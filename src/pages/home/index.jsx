import React from "react";
import { Button, Checkbox, Row } from "antd";
import { ContextProvider, useModel } from "./models";

function Index() {
	const { isCollapsed, dispatch, getLoading } = useModel();

	const btnLoading = getLoading("main/toggleCollapsedFunc");

	return (
		<div>
			<div style={{ height: 200, backgroundColor: "#ddd" }}>欢迎使用</div>
			<div style={{ height: 200, backgroundColor: "#ddd" }}>欢迎使用</div>

			<Button type="primary" onClick={() => dispatch("main/toggleCollapsedFunc")} loading={btnLoading}>
				toggle
			</Button>

			{isCollapsed ? "关闭！" : "打开！"}

			<Row>
				<Checkbox>啦啦</Checkbox>
			</Row>
		</div>
	);
}

function Wrap(props) {
	return (
		<ContextProvider>
			<Index {...props} />
		</ContextProvider>
	);
}

export default Wrap;
