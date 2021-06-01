import React from "react";
import { generateLoadingModel, generateProvider, generateUseModel } from "@/models/utils.js";
import main from "./main";

const allModel = {
	loading: generateLoadingModel(),
	main
};

/**
 * redux
 */
const IndexContext = React.createContext();

// Provider
const ContextProvider = generateProvider({
	context: IndexContext,
	allModel
});

/**
 * @returns {{
 * 	state:object;
 * 	dispatch:function;
 *  getLoading:function;
 * }}
 */
const useModel = generateUseModel({
	context: IndexContext,
	allModel,
	dealExport: (res) => {
		return {
			...res.state.main,
			dispatch: res.dispatch,
			getLoading: res.getLoading
		};
	}
});

export { ContextProvider, useModel };
