/**
 * Created by chintan on 5/25/17.
 */

/*
*
* TERMS :
*
* ES = ECMAScript (JavaScript Standard since ages)
* JSX = JavaScriptXML
* ES5 = ECMAScript 5 (2009)
* ES6/ES2015 = ECMAScript 6 (2016)
* Babel = "Transpiler" to convert ES6 into ES5 so old browsers can run JS
*
* */
var React = require('react'); // residing inside node_modules (installed using npm)
var ReactDOM = require('react-dom'); // residing inside node_modules (installed using npm)
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // es6 destructuring syntax
var Main = require('Main');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// load custom css
require('style!css!sass!GlobalStyles');

// for manipulating DOM (Processes JSX returned by <Intro> component which is then converted by Babel to ES5)
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>,
    document.getElementById("app")
);