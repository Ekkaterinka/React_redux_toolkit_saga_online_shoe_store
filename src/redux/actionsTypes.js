import {GET_CATALOG} from './actions';
import { GET_CART } from './actions';

export const getCatalog = () => ({
    type: GET_CATALOG, payload: { page:0, search:'', filter:0}
});

export const getCart = () => ({
    type: GET_CART, payload: { data, count, size}
});
