import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui';
import App from './App.jsx'; //import our component
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/assets/css/index.css';
import QuotePage from './QuotePage';





//can load other CSS files (e.g,. Bootstrap) here

//load our CSS file

//render the Application vie
	// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="quotes" component={QuotePage}/>
        </Route>
    </Router>,
   document.getElementById('root')
);
