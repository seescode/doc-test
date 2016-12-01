import {Action} from '@ngrx/store';

/** some random constant */
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'

/**
 * This is the cart state 2
 */
export interface CartState {
    productIds: any[];
    quantityById: any;
}

const initialState: CartState = {
    productIds: [], quantityById: {}
}

/**
 * CartReducer supports adding to a cart and checking out.
 */
export function CartReducer (state = initialState, action: Action) {
};