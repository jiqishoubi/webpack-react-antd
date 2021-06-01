import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Spin } from "antd";
import { routes, renderChildren } from "@/router";
import { ContextProvider } from "@/models";
import { ENV_CONFIG } from "@/utils/consts.js";

window.ENV_CONFIG = ENV_CONFIG;
console.log("环境配置", ENV_CONFIG);

function App() {
	return (
		<HashRouter>
			<Suspense fallback={<Spin />}>
				<ContextProvider>{renderChildren(routes)}</ContextProvider>
			</Suspense>
		</HashRouter>
	);
}

export default App;
