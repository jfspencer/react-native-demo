import { spawn } from 'redux-saga/effects';
import { apiSaga } from '@state/_middleware/api-saga';

//is not working currently
export const rootSaga = function* () {
    yield spawn(apiSaga);
};
