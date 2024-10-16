import { Box, Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import project1 from "../assets/monibag-mobile.jpg";
import project2 from "../assets/medteqprodashboard.jpg";
import { Link as ReactRouterLink } from "react-router-dom";

// import Project1Link from "../pages/Project1.js";
// import project3 from "../assets/Naiyanew.png";
// import project4 from "../assets/Wakacarrynew.png";

function Main() {
  return (
    <Box
      mb={["16px", "16px", "28px"]}
      as="section"
      px={10}
      pt="80px"
      id="project-section"
      // mx="auto"
    >
      <Box pb="56px" textAlign={["center"]}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} pb="18px" color="gray.600">
          How about you check out<br></br> my amazing works?😊
        </Heading>
        <Text fontSize={["12px", "14px", "18px"]}>
          <p>
            These projects include their own case studies to showcase my thought
            process.
          </p>
        </Text>
      </Box>
      <Flex
        direction={["column"]}
        spacing="20px"
        alignContent={["center"]}
        justifyContent={["center"]}
      >
        {/* Placeholder for additional content */}
        <ProjectSection1 />
        <ProjectSection2 />
      </Flex>
      <Flex
        direction={["column", "column", "row"]}
        spacing="20px"
        pt="20px"
        mx={"auto"}
      >
        {/* Placeholder for additional content */}
        {/* <ProjectSection3 />
        <ProjectSection4 /> */}
      </Flex>
    </Box>
  );
}

// Project components

function ProjectSection1() {
  return (
    <Box pb={["60px", "60px", "120px"]}>
      <Flex
        direction={["column", "column", "row"]}
        // textAlign={["center", "center", "left"]}
      >
        <ChakraLink
          position="relative"
          // as={Project1Link}
          as={ReactRouterLink}
          to="/project1"
          h={[600, 500, 500]}
          pt={["32px", "32px", "54px"]}
          // pb={["16px", "16px", "54px"]}
          pb={["40px", "40px", "60px"]}
          px={["16px", "16px", "40px"]}
          w={["100%", "100%", "50%"]}
          objectFit="fill"
          bg="gray.100"
          borderRadius={20}
          backgroundImage={`url(${project1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          marginRight="24px"
          marginBottom={["20px", "20px", "0px"]}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            opacity="0"
            transition="opacity 0.6s ease"
            _hover={{ opacity: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            borderRadius="20px"
          >
            <Box px="10px" mt="150px" width={[300, 300, 600]}>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                color="#fff"
                textAlign={["center"]}
              >
                <h1>Explore</h1>
              </Text>
              <Text textAlign={["center"]}>
                <p>Case Study</p>
              </Text>
            </Box>
          </Box>
        </ChakraLink>
        <Box mt={["60px", "60px", "150px"]} width={["100%", "100%", "50%"]}>
          <Text fontSize="4xl" fontWeight="bold" color="gray.600">
            <h1>Monibag</h1>
          </Text>
          <Text fontSize="18px">
            <p>
              Monibag is a remittance app for Nigerians in diaspora to send
              money to their loved ones in nigeria fast and easy
            </p>
            <Flex direction={["row"]}>
              <Box pt="50px" width={[200]} pr="24px">
                {" "}
                <Box fontSize="18px" fontWeight={[700]}>
                  <span width="24px">♥️</span> Over 500k Users
                </Box>
                <Text fontSize="12px">
                  <p>
                    A major adjustment on the look and fill of the web app
                    showed a significant increase in user base.
                  </p>
                </Text>
              </Box>
              <Box pt="50px" width={[200]}>
                {" "}
                <Box fontSize="18px" fontWeight={[700]}>
                  <span width="24px">♥️</span> Over 500k Users
                </Box>
                <Text fontSize="12px">
                  <p>
                    A major adjustment on the look and fill of the web app
                    showed a significant increase in user base.
                  </p>
                </Text>
              </Box>
            </Flex>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

function ProjectSection2() {
  return (
    <Box pb={["40px", "40px", "120px"]}>
      <Flex
        direction={["column", "column", "row"]}
        // textAlign={["center", "center", "left"]}
      >
        <Box
          pb={["40px", "40px", "60px"]}
          mt={["60px", "60px", "150px"]}
          width={["100%", "100%", "50%"]}
        >
          <Text fontSize="4xl" fontWeight="bold" color="gray.600">
            <h1>Medteqpro</h1>
          </Text>
          <Text fontSize="18px">
            <p>
              Monibag is a remittance app for Nigerians in diaspora to send
              money to their loved ones in nigeria fast and easy
            </p>
            <Flex direction={["row"]}>
              <Box pt="50px" width={[200]} pr="24px">
                {" "}
                <Box fontSize="18px" fontWeight={[700]}>
                  <span width="24px">♥️</span> Over 500k Users
                </Box>
                <Text fontSize="12px">
                  <p>
                    A major adjustment on the look and fill of the web app
                    showed a significant increase in user base.
                  </p>
                </Text>
              </Box>
              <Box pt="50px" width={[200]}>
                {" "}
                <Box fontSize="18px" fontWeight={[700]}>
                  <span width="24px">♥️</span> Over 500k Users
                </Box>
                <Text fontSize="12px">
                  <p>
                    A major adjustment on the look and fill of the web app
                    showed a significant increase in user base.
                  </p>
                </Text>
              </Box>
            </Flex>
          </Text>
        </Box>
        <ChakraLink
          position="relative"
          // as={Project1Link}
          as={ReactRouterLink}
          to="/project1"
          h={[600, 500, 500]}
          pt={["32px", "32px", "54px"]}
          pb={["32px", "32px", "54px"]}
          px={["16px", "16px", "40px"]}
          w={["100%", "100%", "50%"]}
          bg="gray.100"
          borderRadius={20}
          backgroundImage={`url(${project2})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          marginRight="20px"
          marginBottom={["20px", "20px", "0px"]}
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            opacity="0"
            transition="opacity 0.6s ease"
            _hover={{ opacity: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            borderRadius="20px"
          >
            <Box px="10px" mt="150px" width={[300, 300, 600]}>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                color="#fff"
                textAlign={["center"]}
              >
                <h1>Explore</h1>
              </Text>
              <Text textAlign={["center"]}>
                <p>Case Study</p>
              </Text>
            </Box>
          </Box>
        </ChakraLink>
      </Flex>
    </Box>
  );
}

// function ProjectSection3() {
//   return (
//     <Box
//       h={[600, 500, 800]}
//       pt={["32px", "32px", "54px"]}
//       pb={["32px", "32px", "54px"]}
//       px={["16px", "16px", "40px"]}
//       w={["100%", "100%", "100%"]}
//       bg="gray.100"
//       borderRadius={20}
//       backgroundImage={`url(${project3})`}
//       backgroundSize="cover"
//       backgroundPosition="center"
//       backgroundRepeat="no-repeat"
//       marginRight="20px"
//       marginBottom={["20px", "20px", "0px"]}
//       objectFit="cover"
//     ></Box>
//   );
// }

// function ProjectSection4() {
//   return (
//     <Box
//       h={[300, 400, 800]}
//       pt={["32px", "32px", "54px"]}
//       px={["16px", "16px"]}
//       w={["100%", "100%", "100%"]}
//       bg="yellow.100"
//       borderRadius={20}
//       backgroundImage={`url(${project4})`}
//       backgroundSize="cover"
//       backgroundPosition="left"
//       backgroundRepeat="no-repeat"
//       objectFit="cover"
//     ></Box>
//   );
// }

export default Main;
