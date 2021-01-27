import { HOMEPAGE_DATA } from '../actions/types';

const initialState = {
    loading: true,
    error: {},
    data : null
};

export default function (state=initialState,action) {
    const { type,payload } = action;

    switch(type) {
        case HOMEPAGE_DATA:
            return {
                ...state,
                loading: false,
                data: payload.error ? null : payload, 
                error: payload.error ? {...payload} : {}
            };
        default:
            return state;
    }
}