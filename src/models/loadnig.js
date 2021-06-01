const model = {
	name: "loading",
	state: {},
	reducers: {
		setLoading({ state, payload, dispatch }) {
			const { type, loading } = payload;

			const newState = { ...state };

			if (loading) {
				newState[type] = true;
			} else {
				delete newState[type];
			}

			return newState;
		}
	}
};

export default model;
