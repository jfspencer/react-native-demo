import { spawn } from 'redux-saga/effects';
import { apiSaga } from '@state/_middleware/api-saga'
import { updateProductSaga } from '@state/product/product-saga';

export const rootSaga = function* () {
    updateProductSaga
    yield spawn(apiSaga);
    yield spawn(updateProductSaga);
};
