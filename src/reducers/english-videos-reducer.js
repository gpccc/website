import englishServices from '../constants/english-services';
import mandarinServices from '../constants/mandarin-services';

import ServiceVideoUtils from '../modules/service-videos-utils';

const initialState = {
    list: ServiceVideoUtils.replaceJointServices(englishServices, mandarinServices),
}

export default function englishVideosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}