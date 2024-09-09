import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import placesReducer from './places.reducer';

const persistConfig = {
    key: 'root',
    storage,
};

export default combineReducers({
    placesReducer: persistReducer(persistConfig, placesReducer), // placesReducer, 
});