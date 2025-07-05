import {getApiUrl} from "@/utils/getApiUrl";
import {ResposeStatus} from "@/enums/common";

export interface Request {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: Record<string, string>;
    body?: any;
}

export type RequestFn = (params?: any) => Request;

export type RequestResponse<T = any> = {
    data: T;
    status: ResposeStatus;
    statusText: string;
}

export const requests: Record<string, RequestFn> = {
    pingServer: () =>
        ({
            method: 'GET',
            url: getApiUrl('/api/ping'),
        }),
    getNetworkInformation: () => ({
        method: 'GET',
        url: getApiUrl('/api/network-information'),
    })
}

