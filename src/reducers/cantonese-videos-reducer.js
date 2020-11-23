import cantoneseServices from '../constants/cantonese-services';

const initialState = {
    list: cantoneseServices,
}

export default function cantoneseVideosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}