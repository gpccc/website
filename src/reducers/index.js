import { combineReducers } from 'redux';

import settingsReducer from './settings-reducer';

const allReducers = () => combineReducers({
    settings: settingsReducer,
});

export default allReducers;