import { settingsConstants } from '../constants/action-settings-constants';

export const setPreferredLanguage = (languageCode) => ({
    type: settingsConstants.SET_PREFERRED_LANGUAGE,
    preferredLanguage: languageCode
});

export const setPreferredWorshipService = (service) => ({
    type: settingsConstants.SET_PREFERRED_SERVICE,
    preferredWorshipService: service
});