import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibileTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

const mapStatetoProps = state => ({
	todos : getVisibileTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
	toggleTodo : id => dispatch(toggleTodo(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
