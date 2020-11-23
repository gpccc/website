import cantoneseServices from '../constants/cantonese-services';
import mandarinServices from '../constants/mandarin-services';

import ServiceVideoUtils from '../modules/service-videos-utils';

const initialState = {
    list: ServiceVideoUtils.replaceJointServices(cantoneseServices, mandarinServices),
}

export default function cantoneseVideosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}