import i18n from '../i18n';
import Cookies from 'js-cookie';

import { settingsConstants } from '../constants/action-settings-constants';
import { SERVICE_COOKIE_KEY } from '../constants/service-constants';

const MANDARIN_SERVICE = 'Mandarin';
const CANTONESE_SERVICE = 'Cantonese';
const ENGLISH_SERVICE = 'English';

const guessServiceFromLanguage = (langCode) => {
    if (langCode === 'zf') {
        return MANDARIN_SERVICE;
    }

    if (langCode === 'zh') {
        return CANTONESE_SERVICE;
    }

    return ENGLISH_SERVICE;
};

const initialState = {
    preferredWorshipService: Cookies.get(SERVICE_COOKIE_KEY) || guessServiceFromLanguage(i18n.language),
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case settingsConstants.SET_PREFERRED_SERVICE:
            return { ...state, preferredWorshipService: action.preferredWorshipService };
        default:
            return state;
    }
}