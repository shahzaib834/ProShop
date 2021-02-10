import { combineReducers } from 'redux';

import { productListReducer, productDetailsReducer } from './productsReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default reducer;
