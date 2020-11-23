import React from 'react';
import ReactDom from 'react-dom';
import FastClick from 'fastclick';
import{HashRouter,Route,Switch} from 'react-router-dom';

import Register from './components/register/register';
import Main from './components/main/main';
import Login from './components/login/login';

FastClick.attach(document.body);;

ReactDom.render(
    <HashRouter>
        <Switch>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <Route  component={Main}></Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
)
