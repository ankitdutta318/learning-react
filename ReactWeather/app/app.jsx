const React     = require('react');
const ReactDOM  = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

        </Route>
    </Router>,
    document.getElementById('app')
);