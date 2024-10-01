import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Box, Heading, Button, useColorModeValue } from "@chakra-ui/react";
import project1 from "../assets/monibag-mobile.jpg";

function Project1() {
  return <HeadingSection />;
}

function HeadingSection() {
  return (
    <Box mx="auto">
      <Box textAlign={["center"]} mt="200px" pb="60px" w={["100%"]}>
        <Heading
          fontSize={["3xl", "3xl", "5xl"]}
          fontWeight={[400, 500, 700]}
          pb="32px"
        >
          {" "}
          Monibag <span>UX Case Study</span>
        </Heading>
        <p fontSize={["14px", "16px", "32px"]}>
          Monibag is a remittance app for Nigerians in diaspora to send money to
          their loved ones in nigeria fast and easy
        </p>

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
        h={[600, 500, 800]}
        pt={["32px", "32px", "54px"]}
        pb={["32px", "32px", "54px"]}
        px={["16px", "16px", "40px"]}
        w={["50%"]}
        // bg="gray.100"
        borderRadius={20}
        backgroundImage={`url(${project1})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        marginBottom={["20px", "20px", "0px"]}
      ></Box>
    </Box>
  );
}

export default Project1;
