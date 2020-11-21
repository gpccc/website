import { settingsConstants } from '../constants/action-settings-constants';

export const setPreferredWorshipService = (service) => ({
    type: settingsConstants.SET_PREFERRED_SERVICE,
    preferredWorshipService: service
});