import {ImagePreview} from "@/components/ui/image-preview";
import {useEffect} from "react";
import {useLivePreview} from "@/hooks/use-live-preview";
import {useMachine} from "@/lib/utils/machine-context.tsx";
import {
    createListCollection,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText
} from "@chakra-ui/react";

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
        <SelectRoot key={'sm'} size={'sm'} collection={rvms} width="320px"
                    
        >
            <SelectLabel>Select framework</SelectLabel>
            <SelectTrigger>
                <SelectValueText placeholder="Select movie"/>
            </SelectTrigger>
            <SelectContent>
                {rvms.items.map((rvm) => (
                    <SelectItem item={rvm} key={rvm.value}>
                        {rvm.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
        A:{machine.ip}
        <ImagePreview image={livePreview.image}/>
    </>
};
const rvms = createListCollection({
    items: [
        {value: "http://192.168.1.22:8080", label: "Alpha: 192.168.1.22"},
        {value: "http://192.168.1.23:8080", label: "Bravo: 192.168.1.23"},
        {value: "http://192.168.1.24:8080", label: "Charlie: 192.168.1.24"},
        {value: "http://192.168.1.25:8080", label: "Delta: 192.168.1.25"},
    ],
})