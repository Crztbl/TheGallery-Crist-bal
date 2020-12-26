import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.css';


export default function Header () {
    return(
        <header className='tg-header'>
            <Link to='/login'>
                Login
            </Link>
            <Link to='/register'>
                Registrate
            </Link>
            
        </header>


    
    );
}