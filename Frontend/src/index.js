import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/barraNavegacao';
import Footer from './componentes/rodape'
import './css/configuracao_basica.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider as Provedor } from 'react-redux';
import { createStore } from 'redux';
import stados from './reducers/index';
const store = createStore(
    stados,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provedor store = { store }>
        <React.StrictMode>
            <Header />
            <Footer />
        </React.StrictMode>
    </Provedor>,
  document.getElementById('root')
);

