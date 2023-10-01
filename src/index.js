import React from 'react';
import { createRoot } from 'react-dom/client';
import reducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = createRoot(document.querySelector('#root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
