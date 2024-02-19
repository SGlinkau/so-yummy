import React from 'react';

import css from './Footer.module.css';
import DescriptionPage from './componentsFooter/DescriptionPage/DescriptionPage';
import NavFooter from './componentsFooter/NavFooter/NavFooter';
import SubscribeForm from './componentsFooter/SubscribeForm/SubscribeForm';
import FollowUs from './componentsFooter/FollowUs/FollowUs';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__box}>
        <div className={css.footer__flex}>
          <DescriptionPage />
          <NavFooter />

          <SubscribeForm />
        </div>
        <FollowUs />
      </div>
      <div className={css.footer__box2}>
        <p>© 2023 All Rights Reserved.</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
