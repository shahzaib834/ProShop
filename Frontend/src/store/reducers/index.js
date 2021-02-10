import { combineReducers } from 'redux';
import ProductListReducer from './productsListReducer';

export default combineReducers({
  productsList: ProductListReducer,
});
