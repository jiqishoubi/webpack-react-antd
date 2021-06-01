function toggleCollapsedAjax(flag) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(!flag);
		}, 1000);
	});
}

const initialState = {
	isCollapsed: false
};

const model = {
	name: "main",
	state: initialState,
	actions: {
		async toggleCollapsedFunc({ dispatch, getState, payload }) {
			await toggleCollapsedAjax();
			const state = getState().main;
			dispatch("main/save", {
				isCollapsed: !state.isCollapsed
			});
		}
	},
	reducers: {
		save({ state, payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};

export default model;
