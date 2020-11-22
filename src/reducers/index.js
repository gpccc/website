import { combineReducers } from 'redux';

import englishVideosReducer from './english-videos-reducer';
import settingsReducer from './settings-reducer';

const allReducers = () => combineReducers({
    englishVideos: englishVideosReducer,
    settings: settingsReducer,
});

export default allReducers;