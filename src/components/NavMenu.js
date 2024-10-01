import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Global.css";
import {
  Box,
  Flex,
  Link,
  useDisclosure,
  Stack,
  IconButton,
  HStack,
  useColorModeValue,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("primaryColor.400", "gray.900"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("black.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseButton /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex direction={["column", "column", "row"]}>
            <ChakraLink as={ReactRouterLink} to="/" textDecoration="none">
              <Text>Tobs-Designs</Text>
            </ChakraLink>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight={[600]}
            >
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.400", "gray.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/about"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.400", "gray.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                About Me
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="project-section"
                smooth="true"
                duration={800}
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("primaryColor.400", "gray.900"),
                }}
                px={2}
                py={1}
                rounded={"md"}
              >
                Projects
              </ChakraLink>
              <NavLink>Contact</NavLink>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ChakraLink
                as={ReactRouterLink}
                to="/"
                px={2}
                py={1}
                rounded={"md"}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={ReactRouterLink}
                to="/about"
                px={2}
                py={1}
                rounded={"md"}
              >
                About Me
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="project-section"
                smooth="true"
                duration={500}
                cursor="pointer"
              >
                Projects
              </ChakraLink>
              <NavLink>Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
