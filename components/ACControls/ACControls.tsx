import {Layout} from "@ui-kitten/components";
import {useState} from "react";
import ACControl from "@/components/ACControls/ACControl";
import {ACController} from "@/types";

type Props = {
    data?: {
        controls: ACController[]
    }
}
const ACControls = ({data}: Props) => {

    const handleControlChange = (name: string, value: boolean) => {

    }
    return <Layout>
        {data?.controls?.map((control, index) =>
            (
                <ACControl key={control.name} {...control} onChange={handleControlChange} isLoading={false}/>)
        )}
    </Layout>
}
export default ACControls;