import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./Clock";

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// setInterval(Clock, 1000);
registerServiceWorker();
