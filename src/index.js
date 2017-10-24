import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./Clock";
import Toggle from "./Toggle";
import LoginControl from "./LoginControl";
import Calculator from "./temperature_calculator/Calculator";

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);

registerServiceWorker();
