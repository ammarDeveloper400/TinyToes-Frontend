import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlicer from './slicers/auth.slicer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    //api
   

    //slice
    auth: authSlicer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  
});

export const persistor = persistStore(store);