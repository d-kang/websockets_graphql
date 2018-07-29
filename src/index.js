import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
