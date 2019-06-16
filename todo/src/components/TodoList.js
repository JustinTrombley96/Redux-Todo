import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTodo, toggleTodo } from '../actions';

export class TodoList extends Component {
	render() {
		return <div />;
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { newTodo, toggleTodo })(TodoList);
