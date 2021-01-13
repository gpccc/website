import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import mandarinVideosReducer from './mandarin-videos-reducer';
import cantoneseVideosReducer from './cantonese-videos-reducer';
import englishVideosReducer from './english-videos-reducer';
import settingsReducer from './settings-reducer';

const allReducers = history => combineReducers({
    mandarinVideos: mandarinVideosReducer,
    cantoneseVideos: cantoneseVideosReducer,
    englishVideos: englishVideosReducer,
    settings: settingsReducer,

    router: connectRouter(history),
});

export default allReducers;