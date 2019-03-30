import { getAllProducts } from "@state/_middleware/api";

//actions
export const getAuthAction = (page = 0, limit = 100) => ({
    type: 'API_REQUEST',
    api: {
        request: getAllProducts,
        requestData: [page, limit],
        successActionName: 'ALL_PRODUCTS_RESPONSE'
    }
});