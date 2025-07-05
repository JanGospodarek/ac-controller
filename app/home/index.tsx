import {Text} from 'react-native';
import {useNavigationContainerRef, useRouter} from "expo-router";
import {useEffect} from "react";
import StatusHeader from "@/components/StatusHeader";
import {ConnectionStatus} from "@/enums/common";
import {Layout} from "@ui-kitten/components";
import ACControls from "@/components/ACControls/ACControls";


export default function HomeScreen() {

    return (
        <Layout style={{flex: 1}}>
            <StatusHeader data={{
                connectionStatus: ConnectionStatus.ONLINE,
                wifiName: "Moja Sieć WiFi",
                ipAddress: "192.168.100.123"
            }}/>
            <ACControls data={{
                controls: [
                    {name: 'Sypialnie', value: true},
                    {name: 'Salon', value: false},
                    {name: 'Kuchnia', value: true},
                ]
            }}/>
        </Layout>
    );
}

