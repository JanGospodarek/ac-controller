export interface Request {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: Record<string, string>;
    body?: any;
}

export type RequestFn = (params?: any) => Request;

const pingServer = () => {
    return {
        method: 'GET',
        url: '/api/ping',
    };
}
