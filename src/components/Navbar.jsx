import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className="welcome">
        <h2>Doggy Daycare</h2>
      </Link>
      <ul>
        <li>
          <Link to="/catalog" className="catalog">Catalog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;