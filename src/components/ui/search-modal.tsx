import {
  Button,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
  Flex,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

export function SearchDialog() {
  const { onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e?.target?.value);
  };

  return (
    <>
      {/* Dialog */}
      <DialogRoot
        size="cover"
        placement="center"
        motionPreset="slide-in-bottom"
      >
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Flex justifyContent="space-between" alignItems="center" p={4}>
            <DialogHeader>Search</DialogHeader>
            {/* Manual Close Button */}
            <Button size="sm" onClick={onClose} colorScheme="red">
              Close
            </Button>
          </Flex>
          <DialogBody>
            {/* Search Input */}
            <Input
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus
            />
          </DialogBody>

          <DialogFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
}
