import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const SiteHeader: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" aria-label="Kaori's Snackhouse home">
          <img src="/kaoris/logo.jpg" alt="" className="brand__mark" />
          <span>
            <strong>Kaori's</strong>
            <small>SNACKHOUSE</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'}>Menu</NavLink>
          <Link to="/cart" className="cart-link">Cart <span>{totalItems}</span></Link>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;