import { NEWTODO, TOGGLETODO } from '../actions';

const initialState = {
	todos : [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NEWTODO:
			return {};
		case TOGGLETODO:
			return {};
		default:
			return state;
	}
};
