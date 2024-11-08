import { Button } from "@/components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, createListCollection, Flex, SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <SelectRoot key={'sm'} size={'sm'} collection={rvms}>
            <SelectLabel>size = {'sm'}</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select movie" />
            </SelectTrigger>
            <SelectContent>
              {rvms.items.map((rvm) => (
                <SelectItem item={rvm} key={rvm.name}>
                  {rvm.name}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
      
      <Box marginLeft="auto">
        <NavLink to="/">
          {({ isActive }) => (
            <Button size="sm" variant={isActive ? "subtle" : "ghost"}>
              Live Preview
            </Button>
          )}
        </NavLink>
        <NavLink to="/dry-run">
          {({ isActive }) => (
            <Button size="sm" variant={isActive ? "subtle" : "ghost"}>
              Dry Run
            </Button>
          )}
        </NavLink>
        <ColorModeButton />
      </Box>
    </Flex>
  );
};


const rvms = createListCollection({
  items: [
    { ip: "http://192.168.1.22:8080", name: "Alpha" },
    { ip: "http://192.168.1.22:8080", name: "Bravo" },
    { ip: "http://192.168.1.22:8080", name: "Charlie" },
    { ip: "http://192.168.1.22:8080", name: "Delta" },
  ],
})