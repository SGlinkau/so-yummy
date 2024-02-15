import React, { useState } from 'react';

import css from './SearchForm.module.css';

const SearchForm = ({ bgButtonColor, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const buttonStyle = {
    backgroundColor: bgButtonColor,
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.form__input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Beef"
        />
        <button type="submit" style={buttonStyle} className={css.form__button}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
