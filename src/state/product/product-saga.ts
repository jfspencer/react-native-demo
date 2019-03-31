import { call, putResolve, takeEvery, select } from 'redux-saga/effects';
import { apiAction } from '@state/_middleware/utils';
import { updateProduct } from '@state/_middleware/api';
import { getSingleProductAction } from '.';

function* _updateProductSaga(action: any) {
    //run update request
    yield putResolve(apiAction(updateProduct, [action.payload.product.id, action.payload.product]))

    //run get request on id, to update local product state
    yield putResolve(getSingleProductAction(action.payload.product.id))

    //resolve   
    yield action.callback()
}

export function* updateProductSaga() {
    yield takeEvery('PRODUCT_UPDATE_SAGA', _updateProductSaga);
}