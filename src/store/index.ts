import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../service/api';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({ 
  [api.reducerPath]: api.reducer 
});

export function setupStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [api.reducerPath]: api.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  });
  setupListeners(store.dispatch);
  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
