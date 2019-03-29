import { createStore } from 'redux';
import { rootReducer } from '@state/root-reducer'

const initialState = {}

export const store = createStore(rootReducer, initialState);

//https://github.com/piotrwitek/react-redux-typescript-guide#action-creators