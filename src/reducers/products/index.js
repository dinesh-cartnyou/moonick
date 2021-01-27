import { ALLPRODUCTS } from '../../actions/types';

const intitialData = {
    loading: true,
    error: {},
    data: null
};

export default function (state = intitialData, action) {
    const { type, payload } = action;

    switch (type) {
        case ALLPRODUCTS:
            return {
                ...state,
                loading: false,
                error: payload.error ? { ...payload } : {},
                data: payload.error ? null : payload
            }
        default:
            return state;
    }
};
