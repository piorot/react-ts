import { Button } from "@/components/ui/button";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex } from "@chakra-ui/react";
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
