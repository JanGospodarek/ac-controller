import React, {useEffect, useRef, useState} from "react";
import {Layout, Spinner, Text, Button} from "@ui-kitten/components";
import {Animated} from "react-native";
import useGetRequest from "@/hooks/useGetRequest";
import {RequestResponse, requests} from "@/constants/requests";
import {useRouter} from "expo-router";
import {ResposeStatus} from "@/enums/common";

const Connecting = () => {
    const {data, error, refetch, loading} = useGetRequest<RequestResponse<null>>({
        requestFn: requests.pingServer
    });
    const [showConnected, setShowConnected] = useState(false);
    const [minLoading, setMinLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const router = useRouter();

    useEffect(() => {
        setMinLoading(true);
        const timer = setTimeout(() => setMinLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (data?.status === ResposeStatus.SUCCESS && !minLoading) {
            setShowConnected(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 400,
                        useNativeDriver: true,
                    }).start(() => {
                        setShowConnected(false);
                        router.replace("/home");
                    });
                }, 1000);
            });
        }
    }, [data, minLoading]);

    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {Boolean(error) && !loading && (
                <>
                    <Text category="h6" status="danger" style={{marginBottom: 16}}>
                        Błąd połączenia z serwerem
                    </Text>
                    <Button onPress={refetch}>
                        Spróbuj ponownie
                    </Button>
                </>
            )}

            {(loading || minLoading) && !error && (
                <>
                    <Spinner size="giant"/>
                    <Text category="h6" style={{marginTop: 16}}>
                        Łączenie z serwerem
                    </Text>
                </>
            )}

            {showConnected && (
                <Animated.View style={{opacity: fadeAnim, position: 'absolute'}}>
                    <Text category="h4" status="success">
                        Połączono
                    </Text>
                </Animated.View>
            )}
        </Layout>
    );
};

export default Connecting;