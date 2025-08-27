import './NavBar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
        <ul>
        <li> <a href = "/">home</a></li>
        <li><a href="/about">about us</a></li>
        <li><a href="/resources">resources</a></li>
        </ul>
        </nav>
        
    );
}

export default NavBar;