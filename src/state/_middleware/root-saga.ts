import { spawn } from 'redux-saga/effects';
import { apiSaga } from '@state/_middleware/api-saga';
//import { allProductsSaga } from '@state/product/all-products-saga';


//is not working currently
export const rootSaga = function* () {
    yield spawn(apiSaga);
    //yield spawn(allProductsSaga);
};
