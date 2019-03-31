import { call, put, putResolve, takeEvery, select } from 'redux-saga/effects';

export function* allProductsProcessor(action: any) {
    //build request, pass request function into call
    try {

        //recursively loop the api call until all pages have been 

    }
    catch (e) {
        if (action.api.failureActionName) {
            const failureResponse = action.api.failureFn ? action.api.failureFn(e) : e;
            yield putResolve({ type: action.api.failureActionName, payload: failureResponse });
        }
        return e;
    }
}

export function* allProductsSaga() {
    yield takeEvery('API_ALL_PRODUCTS_REQUEST', allProductsProcessor);
}