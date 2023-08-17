import { takeLeading, call, put, select } from 'redux-saga/effects';

import {
  getCatalog,
  getCatalogSuccess,
  getCatalogError,
  changeSearchField,
  // clearSearch
} from './reducers/CatalogSlices'

import {
  getProduct,
  getProductSuccess,
  getProductError
} from './reducers/ProductSlices';

import {
  getTopSales,
  getTopSalesSuccess,
  getTopSalesError
} from './reducers/TopSalesSlices';

import { postCart,postSucessCart,getCartError } from './reducers/CartSlices';

import { fetchDataCatalog, fetchDataTopSales, fetchDataProducts, fetchPostCart  } from '../api';

function* getCatalogSaga(action) {
  try {
    const data = yield call(fetchDataCatalog, action.payload
    );
    yield put(getCatalogSuccess(data));
  } catch (errors) {
    yield put(getCatalogError(errors));
  }
}

function* getTopSalesSaga() {
  try {
    const data = yield call(fetchDataTopSales
    );
    yield put(getTopSalesSuccess(data));
  } catch (Error) {
    yield put(getTopSalesError(Error));
  }
}

function* getProductSaga(action) {
  try {
    const data = yield call(fetchDataProducts, action.payload);
    yield put(getProductSuccess(data));
  } catch (err) {
    yield put(getProductError(err));
  }
}

function* postCartSaga(action) {
  try {
    const data = yield call(fetchPostCart, action.payload);
    yield put(postSucessCart(data));
  } catch (err) {
    yield put(getCartError(err));
  }
}

export default function* saga() {
  yield takeLeading(getCatalog.type, getCatalogSaga);
  yield takeLeading(getTopSales.type, getTopSalesSaga);
  yield takeLeading(getProduct.type, getProductSaga);
  yield takeLeading(changeSearchField.type, getCatalogSaga);
  yield takeLeading(postCart.type, postCartSaga);
}

