import React from 'react';
import { Link } from 'react-router-dom';

import css from './NavFooter.module.css';

const NavFooter = () => {
  return (
    <>
      <ul className={css.nav__list}>
        <li className={css.nav__item}>
          <Link to="/search" className={css.nav__link}>
            Ingredients
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to="/add" className={css.nav__link}>
            Add recipes
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to="/my" className={css.nav__link}>
            My recipes
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to="/favorite" className={css.nav__link}>
            Favorite
          </Link>
        </li>
        <li className={css.nav__item}>
          <Link to="/shopping-list" className={css.nav__link}>
            Shopping list
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavFooter;
