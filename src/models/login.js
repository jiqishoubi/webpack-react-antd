const initialState = {
	token: "",
	userInfo: null
};

const model = {
	name: "login",
	state: initialState,
	actions: {
		async login({ dispatch, getState, payload }) {
			console.log("1");
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
