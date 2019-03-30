import { navigate } from "@nav/util/nav-service";

const initialState = { token: null, error: null }

const cases: any = {}
cases['AUTH_RESPONSE'] = (state: any, action: any) => {
    if (action.payload.error === 0) navigate('ProductList')
    return { ...state, token: action.payload.token, error: action.payload.error }
}

export const auth = (state = initialState, action: any) => {
    return typeof cases[action.type] === 'function' ? cases[action.type](state, action) : state;
}