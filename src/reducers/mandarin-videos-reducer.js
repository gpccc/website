import mandarinServices from '../constants/mandarin-services';

const initialState = {
    list: mandarinServices,
}

export default function mandarinVideosReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}