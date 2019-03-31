import { getPagedProducts, getProductStyles } from "@state/_middleware/api";
import { Product } from "@interface/common";
import { apiAction } from "@state/_middleware/utils";
import uniqBy from 'lodash/uniqBy'

//
//ACTIONS
//
export const getPagedProductsAction = (page = 0, limit = 100) => apiAction(getPagedProducts, [page, limit], 'PAGED_PRODUCTS_RESPONSE')
export const getProductStylesAction = () => apiAction(getProductStyles, [], 'PRODUCT_STYLES_RESPONSE')

//
//SELECTORS
//
export const selectAllProducts = (state: any) => state.product.allProducts
export const selectAllProductsTotal = (state: any) => state.product.total
export const selectProductStyles = (state: any) => state.product.styles

export const selectProductById = (state: any, id: number): Product => {
    const res = state.product.allProducts.filter((v: Product) => v.id === id)
    return res[0] ? res[0] : null //TODO upgrade to maybe monad
}

//
//REDUCER
//
const initialState = { allProducts: [], total: 0, styles: [] }

const cases: any = {}
cases['PAGED_PRODUCTS_RESPONSE'] = (state: any, action: any) => {
    const res = uniqBy([...state.allProducts, ...action.payload.products], 'id')
    return ({ ...state, allProducts: res, total: action.payload.total })
}
cases['PRODUCT_STYLES_RESPONSE'] = (state: any, action: any) => ({
    ...state, styles: action.payload.styles
})

export const productReducer = (state = initialState, action: any) => {
    return typeof cases[action.type] === 'function' ? cases[action.type](state, action) : state;
}