import {
    Box,
    createListCollection,
    Flex,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@chakra-ui/react";
import {useMachine} from "@/lib/utils/machine-context.tsx";
import {NavLink} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

export const Header = () => {
    const {machine, changeMachine} = useMachine();

    return (
        <Box borderWidth={"1px"} borderColor={"red"}>
            <Flex
                as="header"
                width="full"
                align="center"
                alignSelf="flex-start"
                justifyContent="center"
                gridGap={2}
            >

                <SelectRoot key={'sm'} size={'sm'} collection={rvms} width="320px"
                            onValueChange={(e) => {
                                debugger;
                                changeMachine({ip: e.value[0], name: ""})
                            }}
                            value={[machine.ip]}
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
        </Box>

    );
};


const rvms = createListCollection({
    items: [
        {value: "http://192.168.1.22:8080", label: "Alpha: 192.168.1.22"},
        {value: "http://192.168.1.23:8080", label: "Bravo: 192.168.1.23"},
        {value: "http://192.168.1.24:8080", label: "Charlie: 192.168.1.24"},
        {value: "http://192.168.1.25:8080", label: "Delta: 192.168.1.25"},
    ],
})