import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/styles.css';
import NewTaskForm from './components/NewTaskForm.jsx';
import Tasks from './components/Tasks.jsx';
import reducers from './reducers/index.js';

const store = createStore(
	reducers,
);

render(
	<Provider store={store} >
		<NewTaskForm />
		<Tasks />
	</Provider>,
	document.getElementById('root'),
);
