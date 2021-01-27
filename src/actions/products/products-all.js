import api from '../../utils/api';
import { ALLPRODUCTS } from '../types';

export const allProducts = () => async dispatch => {
    try {
        const res = await api.get('/products');

        dispatch({
            type: ALLPRODUCTS,
            payload: res.data
        })

    } catch (err) {
        if (err) {
            console.log(err);
            dispatch({
                type: ALLPRODUCTS,
                payload: {
                    error: err
                }
            })
        }
    }
};
