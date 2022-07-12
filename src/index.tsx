import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { configureStore, register } from "./core";
import { GlobalStyles, theme } from "./styles";
import { Card, Content, Grid, Numbers, Title, NewButton } from "./components";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { store, persistedStore }= configureStore();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

//this registers the app as a progressive web app
register();
