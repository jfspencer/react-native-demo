export const toJSON = (apiResponse: any) => {
    try { return apiResponse.json() }
    catch (e) {
        try { return JSON.parse(apiResponse) }
        catch (e) { return apiResponse; }
    }
}