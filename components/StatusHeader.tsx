import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@ui-kitten/components";
import useGetRequest from "@/hooks/useGetRequest";
import {RequestResponse, requests} from "@/constants/requests";

const StatusHeader = () => {

    const {data} = useGetRequest<RequestResponse<{ ipAddress: string }>>({
        requestFn: requests.getNetworkInformation,
    })
    const statusColor = data ? "#4CAF50" : "#FF3D71";

    return (
        <View style={styles.container}>
            <Text category="s1" style={[styles.status, {color: statusColor}]}>
                {data ? "Połączono" : "Brak połączenia"}
            </Text>
            {data?.data?.ipAddress && <Text appearance="hint" category="c1">
                IP Kontrolera: {data.data.ipAddress}
            </Text>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 36,
        paddingBottom: 12,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
    },
    status: {
        fontWeight: "bold",
    },
});

export default StatusHeader;