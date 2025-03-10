import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp';
import './styles.css';

import { Provider } from 'react-redux';
import { store } from './store';

//import './firebase/config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<JournalApp />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
