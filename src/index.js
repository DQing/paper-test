import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom'
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import Paper from './Paper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/paper" component={Paper}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();


