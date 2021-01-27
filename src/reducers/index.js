import { combineReducers } from 'redux';
import home from './home-page';
import contact from './contact';
import products from './products';

export default combineReducers({
    home,
    contact,
    products
});
