import { configureStore } from '@reduxjs/toolkit';
import api from './api';
import { reducers } from '../../features';

export default configureStore({
  reducer: {
    ...reducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
