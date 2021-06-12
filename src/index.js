import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Person from './components/person'
import PersonList from './components/person_list'
import Background from './components/background';
import ReactCSSTransitionGroup from 'react-transition-group';
import ProductList from './components/product_list'

ReactDOM.render(
  <React.StrictMode>
    {/* <PersonList /> */}
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
