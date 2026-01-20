import './NavBar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
        <ul>
        <li> <Link to = "/">home</Link></li>
        <li><Link to="/about">about us</Link></li>
        <li><Link to="/resources">resources</Link></li>
        </ul>
        </nav>
        
    );
}

export default NavBar;