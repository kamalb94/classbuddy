import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import { authApi } from "../features/Apis/authApi";
import { sessionApi } from "../features/Apis/sessionsApi";
import userReducer from './userSlice';
;

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user']
}

const persitedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user: persitedUserReducer,
        [authApi.reducerPath]: authApi.reducer,
        [sessionApi.reducerPath]: sessionApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false}).concat(authApi.middleware).concat(sessionApi.middleware)
    
});

export const persistor = persistStore(store);

export default store;