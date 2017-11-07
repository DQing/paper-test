import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    BrowserRouter,
} from 'react-router-dom'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Paper from './Paper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/paper" component={Paper}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();


