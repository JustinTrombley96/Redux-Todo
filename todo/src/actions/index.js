export const NEWTODO = 'NEWTODO';
export const TOGGLETODO = 'TOGGLETODO';

export const newTodo = () => {
	return {
		type : NEWTODO,
	};
};

export const toggleTodo = () => {
	return {
		type : TOGGLETODO,
	};
};
