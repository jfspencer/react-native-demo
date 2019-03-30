import { getConfig } from '@state/_middleware/endpoint-builder'
import { Base64 } from 'js-base64';

export const getAuth = (user: string, pass: string) => getConfig(
    'https://cscodetest.herokuapp.com/api/status',
    { Authorization: `Basic ${Base64.encode(`${user}:${pass}`)}` },
    true
)