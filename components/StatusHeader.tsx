import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@ui-kitten/components";
import {ConnectionStatus} from "@/enums/common";

type StatusHeaderProps = {
    data?: {
        connectionStatus: ConnectionStatus;
        wifiName: string;
        ipAddress: string;
    }
};

const StatusHeader = ({data}: StatusHeaderProps) => {
    const statusColor = data?.connectionStatus === ConnectionStatus.ONLINE ? "#4CAF50" : "#FF3D71";

    return (
        <View style={styles.container}>
            <Text category="s1" style={[styles.status, {color: statusColor}]}>
                {data?.connectionStatus === ConnectionStatus.ONLINE ? "Połączono" : "Brak połączenia"}
            </Text>
            {data?.wifiName && <Text appearance="hint" category="c1">
                Sieć: {data.wifiName}
            </Text>}
            {data?.ipAddress && <Text appearance="hint" category="c1">
                IP: {data.ipAddress}
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