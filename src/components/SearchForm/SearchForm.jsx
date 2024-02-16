import React, { useState } from 'react';

import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit, bgButtonColor }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onSubmit(inputValue.trim().toLocaleLowerCase());
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setInputValue('');
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
          onFocus={handleFocus}
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
