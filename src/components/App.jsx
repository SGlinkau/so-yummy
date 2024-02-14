import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../utils/theme';
import { GlobalStyle } from './GlobalStyle';

import WelcomePage from '../pages/WelcomePage/WelcomePage';

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
      <WelcomePage />
    </ThemeProvider>
  );
};
