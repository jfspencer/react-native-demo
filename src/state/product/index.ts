import { getAllProducts } from "@state/_middleware/api";

//actions
export const getPagedProductsAction = (page = 0, limit = 100) => ({
    type: 'API_REQUEST',
    api: {
        request: getAllProducts,
        requestData: [page, limit],
        successActionName: 'PAGED_PRODUCTS_RESPONSE'
    }
});

export const getAllProductsAction = (page = 0, limit = 100) => ({
    type: 'API_ALL_PRODUCTS_REQUEST',
    api: {
        request: getAllProducts,
        requestData: [page, limit],
        successActionName: 'ALL_PRODUCTS_RESPONSE'
    }
});

//selectors
export const selectAllProducts = (state: any) => state.product.allProducts
export const selectAllProductsTotal = (state: any) => state.product.total