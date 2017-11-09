import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import 'antd/dist/antd.css';

import App from './container/App';
import paper from "./container/Paper";

import './css/index.css';
import 'antd/dist/antd.css';
import paperListMiddle from './middlewares/App';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleWare = applyMiddleware(paperListMiddle)(createStore);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/paper/:id" component={paper}/>
        </div>
    </BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();


