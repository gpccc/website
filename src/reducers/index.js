import { combineReducers } from 'redux';

import mandarinVideosReducer from './mandarin-videos-reducer';
import englishVideosReducer from './english-videos-reducer';
import settingsReducer from './settings-reducer';

const allReducers = () => combineReducers({
    mandarinVideos: mandarinVideosReducer,
    englishVideos: englishVideosReducer,
    settings: settingsReducer,
});

export default allReducers;