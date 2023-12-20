import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {  FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import themeslice from "../slices/themeslice";


const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1
}
const reducer = combineReducers({
  theme: themeslice
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      thunk,

    ),
})
export default store