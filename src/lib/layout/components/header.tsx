import {Button} from "@/components/ui/button";
import {ColorModeButton} from "@/components/ui/color-mode";
import {
    Box,
    createListCollection,
    Flex,
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText
} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMachine} from "@/lib/utils/machine-context.tsx";
// import {useMachine} from "@/lib/utils/machine-context.tsx";

export const Header = () => {
    const {changeMachine} = useMachine();
    const [value, setValue] = useState<Array<string>>([])
    useEffect(() => {
        console.log('change');
        changeMachine(value[0]);
    }, [value]);
    return (
        <Flex
            as="header"
            width="full"
            align="center"
            alignSelf="flex-start"
            justifyContent="center"
            gridGap={2}
        >
            <SelectRoot key={'sm'} size={'sm'} collection={rvms} width="320px"
                        onValueChange={(e) => setValue(e.value)}
                        value={value}
            >
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

            <Box marginLeft="auto">
                <NavLink to="/">
                    {({isActive}) => (
                        <Button size="sm" variant={isActive ? "subtle" : "ghost"}>
                            Live Preview
                        </Button>
                    )}
                </NavLink>
                <NavLink to="/dry-run">
                    {({isActive}) => (
                        <Button size="sm" variant={isActive ? "subtle" : "ghost"}>
                            Dry Run
                        </Button>
                    )}
                </NavLink>
                <ColorModeButton/>
            </Box>
        </Flex>
    );
};


const rvms = createListCollection({
    items: [
        {value: "http://192.168.1.22:8080", label: "Alpha"},
        {value: "http://192.168.1.23:8080", label: "Bravo"},
        {value: "http://192.168.1.24:8080", label: "Charlie"},
        {value: "http://192.168.1.25:8080", label: "Delta"},
    ],
})