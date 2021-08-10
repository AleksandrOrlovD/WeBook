import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';
import './app.scss';

import Header from '../header/header';
import SearchPage from '../pages/search-page/search-page';
import BookPage from '../pages/book-page/book-page';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Switch>
          <Route path="/" component={SearchPage} exact />
          <Route path="/book/:id" component={BookPage} exact />
          <Route
            render={() => (
              <div>
                <h1>404</h1>
                <h3>Page not found</h3>
              </div>
            )}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
