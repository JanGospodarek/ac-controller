import {Stack, Tabs} from 'expo-router';
import 'react-native-reanimated';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

export default function RootLayout() {
    return (<>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <Stack>
                    <Stack.Screen name="index" options={{headerShown: false}}/>
                    <Stack.Screen name="home/index" options={{headerShown: false}}/>
                </Stack>
            </ApplicationProvider>
        </>

    );
}
