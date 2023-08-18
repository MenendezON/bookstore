import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isPending }) => (isPending ? 'active' : 'pending')}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isPending }) => (isPending ? 'active' : 'pending')}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
