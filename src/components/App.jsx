import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../utils/theme';
import { GlobalStyle } from './GlobalStyle';

import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { Route, Routes } from 'react-router';
import { Navigation } from './Navigation/Navigation';
import { Outlet, NavLink } from 'react-router-dom';

export const App = () => {
  const [isToggleOn, setIsToggleOn] = useState(() => {
    const savedState = localStorage.getItem('theme');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return false;
  });

  useEffect(() => {
    const savedState = localStorage.getItem('theme');
    if (savedState) {
      setIsToggleOn(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isToggleOn));
  }, [isToggleOn]);

  const themeValue = isToggleOn ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyle />
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Navigation />}>
          <Route path="home" element={<cos />} />
          <Route
            path="categories"
            element={
              <div>
                <NavLink to="category">nazwa kategori</NavLink>
                <Outlet />
              </div>
            }
          >
            <Route path="category" element={<np Breakfast />} />
          </Route>
          <Route path="add" element={<cos />} />
          <Route path="my" element={<cos />} />
          <Route path="favorite" element={<cos />} />
          <Route path="shopping-list" element={<cos />} />
          <Route path="search" element={<cos />} />
          <Route path="recipe/:_id" element={<cos />} />
          <Route path="*" element={<cos />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
