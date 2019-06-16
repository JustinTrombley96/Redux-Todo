import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTodo, toggleTodo } from '../actions';

export class Todo extends Component {
	render() {
		return <div />;
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { newTodo, toggleTodo })(Todo);
