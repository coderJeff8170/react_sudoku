import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div>Hello World</div>
    </ThemeProvider>
    
  </React.StrictMode>
);

unregister();
