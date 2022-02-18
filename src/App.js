import { Route, Routes } from 'react-router-dom';
import { useDarkMode } from './customHooks/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';

import { theme } from './utils/theme';

import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  const [themeMode, handleThemeMode] = useDarkMode();

  const currentTheme = themeMode === 'light' ? theme.colors.light : theme.colors.dark;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Routes>
        <Route exact path='/' element={
          <Home
            themeMode={currentTheme}
            changeTheme={handleThemeMode}
          />}
        />
        <Route path='countries'>
          <Route path=':countryCode' element={
            <Details
              themeMode={currentTheme}
              changeTheme={handleThemeMode}
            />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;