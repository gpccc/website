import englishServices from '../constants/english-services';

const initialState = {
    list: englishServices,
}

export default function englishVideosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}