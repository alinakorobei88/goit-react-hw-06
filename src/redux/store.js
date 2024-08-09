import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistStor, persistReducer} from 'redux-persist';

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

const persistor = persistStor(store);

export {store, persistor};