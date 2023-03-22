import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import '@/styles/index.css';
import { I18nextProvider } from 'react-i18next';

import App from '@/App';

import i18n from '@/helper/i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);
