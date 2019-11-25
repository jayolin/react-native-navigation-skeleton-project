import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
//import storage from "redux-persist/lib/storage"

import { createStore, combineReducers } from 'redux'
import home from '../modules/home/_store';
import auth from '../modules/auth/_store';
import initializing from '../modules/initializing/_store';
import firstTimeUser from '../modules/firstTimeUser/_store';

const reducers = combineReducers({
    home,
    auth,
    initializing,
    firstTimeUser
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);

export  { store }
