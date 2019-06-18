import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div class='App'>
				<TodoList />
			</div>
		);
	}
}

export default App;
