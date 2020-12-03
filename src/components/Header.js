import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../Register";
import './Header.css';


export default function Header () {
    return(
        <Router>
        <header className='tg-header'>
            <Switch>
                <route path="/register">
                    <Register/>
                </route>
            </Switch>
        </header>
        </Router>
    );
}