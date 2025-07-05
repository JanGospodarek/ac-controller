import {Stack, Tabs} from 'expo-router';
import 'react-native-reanimated';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

export default function RootLayout() {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Tabs>
                <Tabs.Screen name="index" options={{headerShown: false}}/>

            </Tabs>
        </ApplicationProvider>
    );
}
