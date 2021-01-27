import { CONTACT_DATA } from '../actions/types';

const initialState = {
    loading: true,
    error: {},
    data: null
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'CONTACT_DATA':
            return {
                ...state,
                data: payload.error ? null : payload,
                loading: payload.error ? { ...payload } : {}
            };
        default:
            return { ...state }
    }
}