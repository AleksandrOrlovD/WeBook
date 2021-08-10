import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import WebookService from './services/webook-service';
import { WebookServiceProvider } from './components/webook-service-context/webook-service-context';

import store from './store';

const webookService = new WebookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <WebookServiceProvider value={webookService}>
        <Router>
          <App />
        </Router>
      </WebookServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
