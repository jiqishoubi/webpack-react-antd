import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Spin } from "antd";
import { routes, renderChildren } from "@/router";
import { ContextProvider } from "@/models";

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
