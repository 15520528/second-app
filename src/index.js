import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Topic() {
    return (
        <div>
            <h2>Components</h2>
        </div>
    );
}

const footer  = ({ match })=>(
    <div>
        <h2>footer</h2>
        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>

        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() =>  <h3>Please select a topic. {console.log(match.path)}</h3> }
        />
    </div>
);

ReactDOM.render(
    (<Router  >
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/footer">footer</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path = "/about" component = {About} />
            <Route path = "/footer" component = {footer} />
        </div>
    </Router>),
    document.getElementById('root'));

