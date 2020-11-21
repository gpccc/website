import i18n from '../i18n';
import Cookies from 'js-cookie';

import { settingsConstants } from '../constants/action-settings-constants';
import { SERVICE_COOKIE_KEY } from '../constants/service-constants';

import PreferredServiceType from '../constants/preferred-service-type';

const guessServiceFromLanguage = (langCode) => {
    if (langCode === 'zf') {
        return PreferredServiceType.MANDARIN;
    }

    if (langCode === 'zh') {
        return PreferredServiceType.CANTONESE;
    }

    return PreferredServiceType.ENGLISH;
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