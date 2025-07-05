import {RequestFn} from "@/constants/requests";
import {useCallback, useEffect, useState} from "react";

type Props<T> = {
    requestFn: RequestFn,
    fetchOnMount?: boolean,
}

const useGetRequest = <T = any>({requestFn, fetchOnMount = true}: Props<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const request = requestFn();
            const response = await fetch(request.url, {
                ...request,
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const rsp: T = await response.json();
            setData(rsp);

        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [requestFn]);

    useEffect(() => {
        if (fetchOnMount) {
            fetchData();
        }
    }, [fetchData, fetchOnMount, requestFn]);

    return {
        data,
        error,
        loading,
        refetch: fetchData,
    }
}
export default useGetRequest;