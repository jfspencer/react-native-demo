const buildHeaders = (headers: any) => ({
    'Content-Type': 'application/json',
    ...headers
})

const safeString = (data: any) => {
    try {
        return JSON.stringify(data)
    }
    catch (e) {
        throw Error('could not safe string data: ' + e.message)
    }
}

export const getConfig = (endpoint: string, headers = {}, excludeJWT: boolean = false) => ({
    url: endpoint, method: 'GET',
    headers: buildHeaders(headers),
    excludeJWT
});

export const postConfig = (endpoint: string, payload: any, headers = {}, excludeJWT: boolean = false) => ({
    url: endpoint,
    method: 'POST',
    headers: buildHeaders({ ...headers, Accept: 'application/json' }),
    body: safeString(payload)
});

export const putConfig = (endpoint: any, payload: any, headers = {}, excludeJWT: boolean = false) => ({
    url: endpoint,
    method: 'PUT',
    headers: buildHeaders({ ...headers, Accept: 'application/json' }),
    body: safeString(payload)
});

export const deleteConfig = (endpoint: any, payload: any, headers = {}, excludeJWT: boolean = false) => ({
    url: endpoint,
    method: 'DELETE',
    headers: buildHeaders(headers),
    body: safeString(payload)

});