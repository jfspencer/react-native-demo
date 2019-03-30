
const initialState = {
    allProducts: []
}

const cases: any = {}
cases['ALL_PRODUCTS_RESPONSE'] = (state: any, action: any) => ({ ...state, allProducts: action.payload })

export const product = (state = initialState, action: any) => {
    return typeof cases[action.type] === 'function' ? cases[action.type](state, action) : state;
}