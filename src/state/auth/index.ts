import { getAuth } from "@state/_middleware/api";

//actions
export const getAuthAction = (user: string, pass: string) => ({
    type: 'API_REQUEST',
    api: {
        request: getAuth,
        requestData: [user, pass],
        successActionName: 'AUTH_RESPONSE'
    }
});

//selectors
export const getAccessToken = (state: any) => state.auth.token
export const getAuthError = (state: any) => state.auth.error