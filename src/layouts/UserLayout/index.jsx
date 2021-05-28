import React from "react";
import { renderChildren } from "@/router";

function Index(props) {
	console.log("user", props);
	return (
		<div>
			user
			{renderChildren(props)}
		</div>
	);
}

export default Index;
