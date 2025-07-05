import {Layout, Spinner, Text, Button} from "@ui-kitten/components";
import {useState} from "react";

const Connecting = () => {
    const [error, setError] = useState(true);

    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {error ? (
                <>
                    <Text category="h6" status="danger" style={{marginBottom: 16}}>
                        Błąd połączenia z serwerem
                    </Text>
                    <Button onPress={() => setError(false)}>
                        Spróbuj ponownie
                    </Button>
                </>
            ) : (
                <>
                    <Spinner size="giant"/>
                    <Text category="h6" style={{marginTop: 16}}>
                        Łączenie z serwerem
                    </Text>
                </>
            )}
        </Layout>
    );
};

export default Connecting;