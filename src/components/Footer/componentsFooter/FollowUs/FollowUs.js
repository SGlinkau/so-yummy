import React from 'react';
import { Link } from 'react-router-dom';

import css from './FollowUs.module.css';

const FollowUs = () => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <Link to="#" className={css.list__link}>
            <svg className={css.svg}>
              <use
                className={css.use}
                href="images/svg/symbol-defs.svg#icon-2"
              ></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link to="#" className={css.list__link}>
            <svg className={css.svg}>
              <use
                className={css.use}
                href="images/svg/symbol-defs.svg#icon-3"
              ></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link to="#" className={css.list__link}>
            <svg className={css.svg}>
              <use
                className={css.use}
                href="images/svg/symbol-defs.svg#icon-1"
              ></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link to="#" className={css.list__link}>
            <svg className={css.svg}>
              <use
                className={css.use}
                href="images/svg/symbol-defs.svg#icon-untitled"
              ></use>
            </svg>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default FollowUs;
