import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </HashRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();


