import uniqBy from 'lodash/uniqBy'

const initialState = {
    allProducts: [],
    total: 0
}

const cases: any = {}
cases['PAGED_PRODUCTS_RESPONSE'] = (state: any, action: any) => {

    const res = uniqBy([...state.allProducts, ...action.payload.products], 'id')
    return ({
        ...state,
        allProducts: res,
        total: action.payload.total
    })
}

export const product = (state = initialState, action: any) => {
    return typeof cases[action.type] === 'function' ? cases[action.type](state, action) : state;
}