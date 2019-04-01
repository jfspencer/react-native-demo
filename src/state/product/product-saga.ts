import { putResolve, takeEvery } from 'redux-saga/effects';
import { apiAction } from '@state/_middleware/utils';
import { updateProduct, createProduct } from '@state/_middleware/api';
import { getSingleProductAction } from '.';


function* _createProductSaga(action: any) {
    const res = yield putResolve(apiAction(createProduct, [action.payload.product]))
    yield putResolve(getSingleProductAction(res.product_id))
    yield action.callback()
}

export function* createProductSaga() {
    yield takeEvery('PRODUCT_CREATE_SAGA', _createProductSaga);
}

function* _updateProductSaga(action: any) {
    yield putResolve(apiAction(updateProduct, [action.payload.product.id, action.payload.product]))
    yield putResolve(getSingleProductAction(action.payload.product.id))
    yield action.callback()
}

export function* updateProductSaga() {
    yield takeEvery('PRODUCT_UPDATE_SAGA', _updateProductSaga);
}



