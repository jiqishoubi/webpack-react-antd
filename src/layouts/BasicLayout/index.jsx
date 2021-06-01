import React, { Fragment } from "react";
import ProLayout from "@ant-design/pro-layout";
import { renderChildren } from "@/router";
import CustomHeader from "@/components/common/CustomHeader";
import Side from "@/components/common/Side";
import KeepAliveTabs from "@/components/common/KeepAlive/KeepAliveTabs";
import defaultSettings from "../../../config/defaultSettings";
import styles from "./index.less";

function Index(props) {
	return (
		<div
			style={{
				height: "100vh"
			}}
		>
			{/* <CustomHeader contentDOM={contentDOM} />
			<div className={styles.main_content}>
				<Side />
				<div className={styles.page_content}>{renderChildren(props)}</div>
			</div> */}

			<ProLayout
				layout="mix"
				headerTheme="light"
				navTheme="light"
				menuItemRender={(item, dom) => <div>pre {dom}</div>}
				subMenuItemRender={(_, dom) => <div>pre {dom}</div>}
				title="Remax"
				logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
			>
				{defaultSettings.isTabs && <KeepAliveTabs />}
				{renderChildren(props)}
			</ProLayout>
		</div>
	);
}

export default Index;
