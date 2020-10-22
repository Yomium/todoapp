import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/index.css';
import NewTaskForm from './components/NewTaskForm.jsx';
import Tasks from './components/Tasks.jsx';
import reducers from './reducers/index.js';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
	reducers,
	devtoolMiddleware,
);

render(
	<Provider store={store} >
		<NewTaskForm />
		<Tasks />
	</Provider>,
	document.getElementById('root'),
);
