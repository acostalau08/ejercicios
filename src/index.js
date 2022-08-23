import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from '../src/Conteiners/App';

// se crea método dondé mediante la variable root se guarda el contenedor traido del index html 
const root = ReactDOM.createRoot(document.getElementById('root'));
// se renderiza el método que se hizo
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
); //Acá se hace toda la app como tal