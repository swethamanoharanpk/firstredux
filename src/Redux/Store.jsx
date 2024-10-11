// import {configureStore} from '@reduxjs/toolkit'
// import userReducer from './Userslice'

// export default configureStore({
//     reducer:{
//         userInfo:userReducer
//     }
// })
import userData from './Userslice'
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'





const persistConfig = {
  key: 'firstRedux',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, userData)

export const store = configureStore({
  reducer: {
    userInfo: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

