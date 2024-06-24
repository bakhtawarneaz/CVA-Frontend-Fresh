// ** Redux Imports
import { configureStore , combineReducers} from '@reduxjs/toolkit';
import authSlice from '../redux/slices/authSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  auth: authSlice,
})

const persistConfig = {
  key:"root",
  storage
}

const persistedReducer  = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer 
});

export const persistor = persistStore(store);
