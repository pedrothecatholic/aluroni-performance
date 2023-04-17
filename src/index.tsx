import './index.css';
import 'normalize.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import Router from './routes';

render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('root')
);
