import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import project1 from "../assets/monibag-mobile.jpg";

function Project1() {
  return (
    <Box>
      <HeadingSection />
      <Section1 />
    </Box>
  );
}

function HeadingSection() {
  return (
    <Box mx="auto" w={["100%"]}>
      <Flex
        direction={["column"]}
        alignItems={["center"]}
        justifyContent={["center"]}
      >
        <Box
          mt="100px"
          pb="60px"
          w={["300px", "300px", "800px"]}
          textAlign={["center"]}
        >
          <Heading
            fontSize={["3xl", "3xl", "5xl"]}
            fontWeight={[400, 500, 700]}
            pb="32px"
          >
            {" "}
            Monibag <span>UX Case Study</span>
          </Heading>
          <Text fontSize={["14px", "16px", "18px"]}>
            <p>
              Monibag is a remittance app for Nigerians in diaspora to send
              money to their loved ones in nigeria fast and easy.
            </p>
          </Text>
          <Box mt="48px">
            <ChakraLink>
              <Button
                as={ReactRouterLink}
                to="/"
                textDecoration="none"
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.700"),
                  color: "gray.50",
                }}
                bgColor="gray.700"
                color="gray.200"
              >
                Back to Home
              </Button>
            </ChakraLink>
          </Box>
        </Box>
        <Box
          mx="auto"
          h={[600, 500, 600]}
          pt={["32px", "32px", "54px"]}
          pb={["32px", "32px", "54px"]}
          px={["16px", "16px", "40px"]}
          w={["70%"]}
          // bg="gray.100"
          borderRadius={20}
          backgroundImage={`url(${project1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          marginBottom={["20px", "20px", "0px"]}
        ></Box>
      </Flex>
    </Box>
  );
}

function Section1() {
  return (
    <Box>
      <Text>
        <h1>Objective</h1>
      </Text>
    </Box>
  );
}

export default Project1;
