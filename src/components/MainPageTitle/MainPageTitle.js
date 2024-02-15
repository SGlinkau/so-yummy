import React from "react";

import css from "./MainPageTitle.module.css";

const MainPageTitle = ({ title }) => {
  return (
    <>
      <main className={css.main}>
        <h2 className={css.main__title}>{title}</h2>
        <div className={css.dot1}></div>
        <div className={css.dot2}></div>
        <div className={css.dot3}></div>
      </main>
    </>
  );
};

export default MainPageTitle;
