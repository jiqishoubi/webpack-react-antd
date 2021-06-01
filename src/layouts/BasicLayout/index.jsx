import React, { Fragment } from "react";
import { renderChildren } from "@/router";
import CustomHeader from "@/components/common/CustomHeader";
import Side from "@/components/common/Side";
import styles from "./index.less";

function Index(props) {
	const contentDOM = (
		<div>
			<div>logo</div>
		</div>
	);

	return (
		<Fragment>
			<CustomHeader contentDOM={contentDOM} />
			<div className={styles.main_content}>
				<Side />

				{/* 右侧页面内容 */}
				<div className={styles.page_content}>{renderChildren(props)}</div>
			</div>
		</Fragment>
	);
}

export default Index;
