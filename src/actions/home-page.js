import api from '../utils/api';
import { HOMEPAGE_DATA } from './types';

export const homePageData = () => async dispatch => {
    try{
        // const res = await api.get('/b43c654d-e24b-4400-8359-75ab237aaefa');
        const res = await api.get('https://run.mocky.io/v3/b43c654d-e24b-4400-8359-75ab237aaefa');
        // const res = await api.get('/getHomeRecord');

        dispatch({
            type: HOMEPAGE_DATA,
            payload: res
        })
    } catch(err) {
        if(err) {
            // errors.forEach( error => dispatch(setAlert(msg,error,'danger')));
            console.log(err,'err');
            dispatch({
                type: HOMEPAGE_DATA,
                payload: {
                    error: err
                }
            })
        }
    }
};