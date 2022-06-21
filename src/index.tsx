import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';
import { Card, Content, Grid, Title } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid></Grid>
        </Card>
      </Content>
    </ThemeProvider>
    
  </React.StrictMode>
);

unregister();
