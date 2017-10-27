import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Bin from './components/Bin';
import Shelf from './components/Shelf';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shelf/:id" component={Shelf} />
        <Route path="/bin/:id" component={Bin} />
    </Switch>
)