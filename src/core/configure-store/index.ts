import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";

import reducer from "reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(
    persistedReducer,
    devToolsEnhancer({})
  );
  const persistedStore = persistStore(store)


  return { store, persistedStore };
}

export default configureStore;
