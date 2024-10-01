import { Box, Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import project1 from "../assets/monibag-mobile.jpg";
import project2 from "../assets/medteqprodashboard.png";
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
    >
      <Box pb="56px" textAlign={["center"]}>
        <Heading fontSize={["3xl", "4xl", "5xl"]} pb="18px" color="gray.600">
          How about you check<br></br> my amazing works?😊
        </Heading>
        <p fontSize={["12px", "14px", "18px"]}>
          These projects include their own case studies to showcase my thought
          process.
        </p>
      </Box>
      <Flex direction={["column", "column", "row"]} spacing="20px" mx={"auto"}>
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
    <ChakraLink
      position="relative"
      // as={Project1Link}
      as={ReactRouterLink}
      to="/project1"
      h={[600, 500, 500]}
      pt={["32px", "32px", "54px"]}
      pb={["32px", "32px", "54px"]}
      px={["16px", "16px", "40px"]}
      w="100%"
      bg="gray.100"
      borderRadius={20}
      backgroundImage={`url(${project1})`}
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
          <Text fontSize="5xl" fontWeight="bold" color="primaryColor.600">
            <h1>Monibag</h1>
          </Text>
          <Text>
            <p>
              Monibag is a remittance app for Nigerians in diaspora to send
              money to their loved ones in nigeria fast and easy
            </p>
            <Box pt="10px" width={[300]}>
              {" "}
              <Box fontSize="24px" fontFamily="rockwell" fontWeight={[700]}>
                Over 500k Users
              </Box>
              <p>
                A major adjustment on the look and fill of the web app showed a
                significant increase in user base.
              </p>
            </Box>
          </Text>
        </Box>
      </Box>
    </ChakraLink>
  );
}

function ProjectSection2() {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to="/project2"
      position="relative"
      h={[300, 400, 500]}
      pt={["32px", "32px", "54px"]}
      px={["16px", "16px"]}
      w="100%"
      bg="yellow.100"
      borderRadius={20}
      backgroundImage={`url(${project2})`}
      backgroundSize="cover"
      backgroundPosition="left"
      backgroundRepeat="no-repeat"
      objectFit="cover"
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
          <Text fontSize="5xl" fontWeight="bold" color="yellow.100">
            <h1>MedTeq Pro</h1>
          </Text>
          <Text>
            <p>
              Monibag is a remittance app for Nigerians in diaspora to send
              money to their loved ones in nigeria fast and easy
            </p>
          </Text>
        </Box>
      </Box>
    </ChakraLink>
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
