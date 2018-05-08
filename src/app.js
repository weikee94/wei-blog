import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import WeiBlog from './components/WeiBlog';
import './styles/styles.scss';

console.log('test');

ReactDOM.render(<AppRouter />, document.getElementById('app'));

