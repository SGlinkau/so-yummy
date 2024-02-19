import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoFooter } from '../../../../img/logo-footer.svg';

import css from './DescriptionPage.module.css';

const DescriptionPage = () => {
  return (
    <div className={css.description}>
      <Link className={css.link} to="/home">
        <span>
          <LogoFooter />
        </span>
        <h2 className={css.title}>So Yummy</h2>
      </Link>
      <ul className={css.description__list}>
        <li className={css.description__item}>
          Database of recipes that can be replenished{' '}
        </li>
        <li className={css.description__item}>
          Flexible search for desired and unwanted ingredients
        </li>
        <li className={css.description__item}>
          Ability to add your own recipes with photos
        </li>
        <li className={css.description__item}>Convenient and easy to use</li>
      </ul>
    </div>
  );
};

export default DescriptionPage;
