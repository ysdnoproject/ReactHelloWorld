import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./Clock";
import Toggle from "./Toggle";

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

registerServiceWorker();
