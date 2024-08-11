import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = {
    key: 'contacts', storage,
    whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
});

const persistor = persistStore(store);

export {store, persistor};