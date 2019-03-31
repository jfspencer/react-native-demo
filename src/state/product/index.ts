import { getPagedProducts } from "@state/_middleware/api";
import { Product } from "@interface/common";

//actions
export const getPagedProductsAction = (page = 0, limit = 100) => ({
    type: 'API_REQUEST',
    api: {
        request: getPagedProducts,
        requestData: [page, limit],
        successActionName: 'PAGED_PRODUCTS_RESPONSE'
    }
});

export const getAllProductsAction = (page = 0, limit = 100) => ({
    type: 'API_ALL_PRODUCTS_REQUEST',
    api: {
        request: getPagedProducts,
        requestData: [page, limit],
        successActionName: 'ALL_PRODUCTS_RESPONSE'
    }
});

//selectors
export const selectAllProducts = (state: any) => state.product.allProducts
export const selectAllProductsTotal = (state: any) => state.product.total

export const selectProductById = (state: any, id: number): Product => {
    const res = state.product.allProducts.filter((v: Product) => v.id === id)
    return res[0] ? res[0] : null //TODO upgrade to maybe monad
}