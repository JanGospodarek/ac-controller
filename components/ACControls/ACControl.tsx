import {Card, Layout, Text, Toggle} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import {ACController} from "@/types";
import {useState} from "react";

type ACControlProps = ACController & {
    onChange: (name: string, value: boolean) => void;
    isLoading: boolean;
};

const ACControl = ({name, value: defaultValue, onChange, isLoading}: ACControlProps) => {
    const [value, setValue] = useState(defaultValue);

    const handleToggleChange = (v: boolean) => {
        setValue(v)
        onChange(name, v);
    }

    return (
        <Card style={styles.card}>
            <Layout style={styles.row}>
                <Text category="h6">{name}</Text>
                <Toggle
                    checked={value}
                    onChange={handleToggleChange}
                    disabled={isLoading}
                />
            </Layout>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 8,
        borderRadius: 10,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
});

export default ACControl;