import React, { Fragment } from "react";
import { renderChildren } from "@/router";
import CustomHeader from "@/components/common/CustomHeader";
import Side from "@/components/common/Side";
import styles from "./index.less";

function Index(props) {
	return (
		<Fragment>
			<CustomHeader />
			<div className={styles.main_content}>
				<Side />

				{/* 右侧页面内容 */}
				<div className={styles.page_content}>{renderChildren(props)}</div>
			</div>
		</Fragment>
	);
}

export default Index;
