import { combineReducers } from 'redux';


const appReducer = combineReducers({

  });
export const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT_REQUEST') {
      state = undefined;
    }
    return appReducer(state, action);
};
  