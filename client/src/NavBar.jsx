import './NavBar.css'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
        <ul>
        <li> <Link href = "/">home</Link></li>
        <li><Link href="/about">about us</Link></li>
        <li><Link href="/resources">resources</Link></li>
        </ul>
        </nav>
        
    );
}

export default NavBar;