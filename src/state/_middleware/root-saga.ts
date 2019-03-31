import { spawn } from 'redux-saga/effects';
import { apiSaga } from '@state/_middleware/api-saga'

export const rootSaga = function* () {
    yield spawn(apiSaga);
};
