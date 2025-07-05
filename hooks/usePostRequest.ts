import {RequestFn} from "@/constants/requests";
import {useCallback, useState} from "react";

type Props<P> = {
    requestFn: RequestFn,
}
type Response = {
    status: string;
    message: string;
}

const usePostRequest = <P = any>({requestFn}: Props<P>) => {
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState(false);

    const post = useCallback(async (params?: P) => {
        setLoading(true);
        setError(null);
        try {
            const request = requestFn(params);
            const response = await fetch(request.url, {
                ...request,
                body: request.body ? JSON.stringify(request.body) : undefined,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const rsp: Response = await response.json();
            return rsp;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [requestFn]);

    return {
        error,
        loading,
        post,
    }
}

export default usePostRequest;