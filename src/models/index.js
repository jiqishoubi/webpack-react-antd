import React, { useReducer, useContext, useEffect, useRef } from "react";
import lodash from "lodash";
// models
import loading from "./loadnig";
import global from "./global";
import login from "./login";

const allModel = {
	loading,
	global,
	login
};

const getInitStateFunc = () => {
	const state = {};
	for (const key in allModel) {
		state[key] = allModel[key].state;
	}
	return state;
};

// **************************************************************************************************
/**
 * redux
 */
const IndexContext = React.createContext();

// const initStateFunc = () => {
//   return getInitStateFunc();
// };

/**
 * reducer 原生的dispatch触发的就是这个
 * @param {*} allState
 * @param {object} options
 *
 * @returns
 */
const reducer = (allState, options) => {
	const { modelName, methodName, payload, dispatch } = options;

	const modelReducer = allModel[modelName].reducers?.[methodName];

	const oldModelState = allState[modelName];
	const newModelState = modelReducer({
		state: oldModelState,
		payload,
		dispatch
	});

	return lodash.cloneDeep({
		...allState,
		[modelName]: newModelState
	});
};

// Provider
const ContextProvider = (props) => {
	const [allState, dispatch] = useReducer(
		reducer,
		getInitStateFunc()
		// initStateFunc
	);

	return <IndexContext.Provider value={{ state: allState, dispatch }}>{props.children}</IndexContext.Provider>;
};

/**
 * hooks
 */
const useModel = () => {
	const { state, dispatch } = useContext(IndexContext);

	const stateRef = useRef(state);

	useEffect(() => {
		stateRef.current = state;
	}, [state]);

	function getState() {
		return { ...stateRef.current };
	}

	// loading
	function setLoading(type, flag) {
		dispatch({
			modelName: "loading",
			methodName: "setLoading",
			payload: {
				type,
				loading: flag
			},
			dispatch: thunkDispatch
		});
	}

	function getLoading(type) {
		return state.loading[type] || false;
	}

	/**
	 * 最终暴露出去的，外面用到的dispatch 可以处理异步
	 * @param {string} type // global/toggle
	 * @param {*} payload // 自定义携带参数
	 */
	function thunkDispatch(type, payload) {
		const modelName = type.split("/")[0];
		const methodName = type.split("/")[1];

		const modelAction = allModel[modelName].actions?.[methodName];

		if (modelAction) {
			// 异步
			setLoading(type, true);
			modelAction({
				getState,
				payload,
				dispatch: thunkDispatch
			}).finally(() => {
				setLoading(type, false);
			});
		} else {
			// 同步
			dispatch({
				modelName,
				methodName,
				payload,
				dispatch: thunkDispatch
			});
		}
	}

	return {
		state,
		dispatch: thunkDispatch,
		getLoading
	};
};

export { ContextProvider, useModel };
