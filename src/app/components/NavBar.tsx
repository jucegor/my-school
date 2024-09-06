// components/NavBar.tsx
import { useState } from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Link, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement] = useState<'left'>('left');

    return (
        <Box bg="teal.500" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <HStack spacing={8} alignItems="center">
                    <Box fontWeight="bold" color="white">MySite</Box>
                    <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Link px={2} py={1} rounded={'md'} _hover={{ bg: 'teal.400' }} href="#">
                            Home
                        </Link>
                        <Link px={2} py={1} rounded={'md'} _hover={{ bg: 'teal.400' }} href="#">
                            About
                        </Link>
                        <Link px={2} py={1} rounded={'md'} _hover={{ bg: 'teal.400' }} href="#">
                            Services
                        </Link>
                        <Link px={2} py={1} rounded={'md'} _hover={{ bg: 'teal.400' }} href="#">
                            Contact
                        </Link>
                    </HStack>
                </HStack>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={onOpen}
                />
            </Flex>

            {/* Drawer for mobile view */}
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Stack as="nav" spacing={4}>
                            <Link href="#" onClick={onClose}>Home</Link>
                            <Link href="#" onClick={onClose}>About</Link>
                            <Link href="#" onClick={onClose}>Services</Link>
                            <Link href="#" onClick={onClose}>Contact</Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default NavBar;