import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import configStore from './store/configureStore';
import './index.css';
import App from './App';
import { appAction } from './actions';
import reportWebVitals from './reportWebVitals';

const store = configStore();
let configFilePath = '/config.json';
axios.get(configFilePath)
.then(res => {
	store.dispatch(appAction.configLoaded(res.data));
	ReactDOM.render(
		<Provider store={store} >
			<App />
		</Provider>,
	document.getElementById('root'));
})
.catch(err => {
	console.log('Error reading config.json');
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
