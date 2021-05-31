import React from "react";
import styles from "./index.less";

/**
 * @param {object} props
 * @returns
 */
function Index(props) {
	console.log(props);

	return (
		<div className={styles.header_wrap}>
			<div></div>
			<div>账号</div>
		</div>
	);
}

export default Index;
