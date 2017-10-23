import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = <h1>Hello, world</h1>;

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    element,
    document.getElementById('root')
);
registerServiceWorker();
