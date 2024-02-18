import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/add">Add recipes</NavLink>
            </li>
            <li>
              <NavLink to="/my">My recipes</NavLink>
            </li>
            <li>
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
