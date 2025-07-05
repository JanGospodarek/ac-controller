import {API_URL} from "@/constants/constants";

export const getApiUrl = (path: string) => {
    return `${API_URL}${path}`;
}