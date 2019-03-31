import { combineReducers } from 'redux';
import { inventory } from '@state/inventory/inventory-reducer';
import { product } from '@state/product/product-reducer';
import { order } from '@state/order/order-reducer';
import { auth } from '@state/auth/auth-reducer';

const appReducer = combineReducers({
  auth,
  inventory,
  order,
  product
});
export const rootReducer = (state: any, action: any) => appReducer(state, action);
