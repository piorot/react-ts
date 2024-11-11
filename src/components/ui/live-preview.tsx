import {ImagePreview} from "@/components/ui/image-preview";
import {useEffect} from "react";
import {useLivePreview} from "@/hooks/use-live-preview";
import {useMachine} from "@/lib/utils/machine-context.tsx";

export const LivePreview = () => {
    const [livePreviewTrigger, , livePreview] = useLivePreview();
    const {machine} = useMachine();
    useEffect(() => {
        const interval = setInterval(() => {
            livePreviewTrigger();
        }, 10000000000);
        return () => clearInterval(interval);
    }, []);

    return <>
        A:{machine}
        <ImagePreview image={livePreview.image}/>
    </>
};
