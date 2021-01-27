import { CONTACT_DATA } from './types';
import api from '../utils/api';

export const contactPageData = () => async dispatch => {    
    try{
        const res = await api.get('/getcontactdetails');

        dispatch({
            type: CONTACT_DATA,
            payload: res.data
        })
    } catch(err) {
        if(err) {
            dispatch({
                type: CONTACT_DATA,
                payload: {
                    error: err
                }
            })
        }
    }
}