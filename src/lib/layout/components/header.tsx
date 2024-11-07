import { ColorModeButton } from '@/components/ui/color-mode';
import { Box, Flex } from '@chakra-ui/react';

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
        <ColorModeButton />
      </Box>
    </Flex>
  );
};
