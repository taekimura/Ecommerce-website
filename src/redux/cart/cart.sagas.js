import {all, call, takeLatest, put} from 'redux-saga/effects';

import CartActionTypes from '../cart/cart.types';
import UserActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';
import { triggerNotification } from '../../components/notification/notification';

export function* clearShoppingCart() {
    yield put(clearCart())
    yield triggerNotification('Purchase was successful')
  }

export function* notifyAboutPurchaseFailure() {
yield triggerNotification(
    'There was an issue with your payment. Make sure you use the test CC number provided'
)
}

export function* notifyAboutItemClear() {
yield triggerNotification('Item was cleared')
}
  

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onPurchaseSuccess() {
    yield takeLatest(CartActionTypes.ON_PURCHASE_SUCCESS, clearShoppingCart)
  }
  
  export function* onPurchaseFailure() {
    yield takeLatest(CartActionTypes.ON_PURCHASE_FAILURE, clearShoppingCart)
  }

export function* cartSagas(){
    yield(all([call(onSignOutSuccess)]));
}