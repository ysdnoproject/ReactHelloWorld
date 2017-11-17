import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./Clock";
import Toggle from "./Toggle";
import LoginControl from "./LoginControl";
import Calculator from "./temperature_calculator/Calculator";
import FilterableProductTable from "./flterable_product_table/FilterableProductTable";
import PRODUCTS from "./flterable_product_table/dummy_data";

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
);

registerServiceWorker();
