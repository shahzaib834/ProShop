import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './productsReducers';
import { cartReducer } from './cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default reducer;
