import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import {
  Box,
  Heading,
  Button,
  useColorModeValue,
  Text,
  Flex,
  Image,
  keyframes,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import "../styles/Global.css";
import project1 from "../assets/monibag-mobile-hand.png";
import Footer from "../components/Footer";
import monibagproduct from "../assets/Monibagproduct.png";
import dateIcon from "../icons/calendar-2-line.png";
import scope from "../icons/Scope-Icon.png";
import team from "../icons/team-Icon.png";
import Disclaimer from "../icons/Disclamier-Icon.png";
import product from "../icons/product-Icon.png";
import role from "../icons/role-Icon.png";
import lady from "../assets/ladyonphone.png";
import arrow from "../icons/icegif-715.gif";
import RevealOnScrollFadeDown from "../util/RevealOnScrollFadeDown";
import RevealOnScrollFadeRight from "../util/RevealOnStrollFadeRight";

function Project1() {
  return (
    <Box>
      <HeadingSection />
      <Section1 />
      <Footer />
    </Box>
  );
}

function HeadingSection() {
  return (
    <Box w={["100%"]} bg="#f9f9f9">
      <Box mx="auto" w={["70%"]} color="gray.600" px={["24px"]}>
        <RevealOnScrollFadeDown>
          <Flex
            direction={["column", "column", "row"]}
            alignItems={["center"]}
            justifyContent={["center"]}
          >
            <Box
              mt={["48px", "64px", "64px"]}
              pb="60px"
              w={["300px", "300px", "1140px"]}
              textAlign={["center", "left", "left"]}
              mr={[0, 0, 10]}
            >
              <Box>
                <Heading
                  fontSize={["3xl", "3xl", "4xl"]}
                  fontWeight={[400, 500, 500]}
                  pb="16px"
                  // color="brandBlue.900"
                  color="gray.600"
                >
                  {" "}
                  Monibag <span fontSize={["24px"]}>UX Case Study</span>
                </Heading>
                <Text
                  fontSize={["14px", "16px", "18px"]}
                  fontWeight={[400]}
                  pt={["16px"]}
                  // color="gray.500"
                >
                  Monibag is a remittance app for Nigerians in diaspora to send
                  money to their loved ones in nigeria fast and easy.
                </Text>
              </Box>

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
              mt={["40px"]}
              // mx="auto"
              h={[300, 500, 800]}
              pt={["32px", "32px", "180px"]}
              pb={["32px", "32px", "54px"]}
              px={["16px", "16px", "80px"]}
              w={["100%", "100%", "100%"]}
              // bg="gray.100"
              // borderRadius={20}
              backgroundImage={`url(${project1})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              marginBottom={["20px", "20px", "0px"]}
              objectFit="cover"
            ></Box>
          </Flex>
        </RevealOnScrollFadeDown>
      </Box>
    </Box>
  );
}

function Section1() {
  return (
    <Container
      mx="auto"
      maxWidth={["container.sm", "container.lg"]}
      color="gray.600"
    >
      <Box
        // width={["100%"]}
        // bgColor="#000"
        p={["32px"]}
        // rounded="20px"
        textAlign="center"
        // bg="gray.800"
        // bg="#f9f9f9"
        bg="#ffffff"
      >
        <Box>
          <RevealOnScrollFadeDown>
            <Heading
              pt={["24px", "32px", "70px"]}
              fontSize={["3xl", "4xl", "3xl"]}
              color="gray.600"
              // fontWeight={[300, 300, 600]}
              fontWeight={["medium", "medium", "medium"]}
              pb="80px"
            >
              Project Overview
            </Heading>
            <LoadingImage />
          </RevealOnScrollFadeDown>
        </Box>

        {/* <Box mx="auto"> */}

        <Box textAlign="justify" width={["100%"]} mt={["24px", "32px", "64px"]}>
          <RevealOnScrollFadeDown>
            <Flex direction={["column", "column", "row"]} gap={12}>
              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={product} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  The Product
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  Monibag is an IMTO product that brigdes the gap in remittance
                  for faster and easier transfer of money from the united
                  kingdom to nigeria.
                </Text>
              </Box>
              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={scope} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  Project scope
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  This project is aimed at helping users based in the UK add
                  money to their monibag wallets, setup benefiary and also be
                  able to send money to users in nigeria or send order to an
                  agent to top up account.
                </Text>
              </Box>
            </Flex>
          </RevealOnScrollFadeDown>
          <RevealOnScrollFadeDown>
            <Flex gap={12} direction={["column", "column", "row"]}>
              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={team} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  Team
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  Product Owner, 1 Scrum master, 2 Software Engineers, 2
                  Designers, 1 QA Engineers.
                </Text>
              </Box>

              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={dateIcon} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  Duration
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  1 month
                </Text>
              </Box>
            </Flex>
          </RevealOnScrollFadeDown>

          <RevealOnScrollFadeDown>
            <Flex gap={12} direction={["column", "column", "row"]}>
              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={role} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  My Role
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  Lead UI/UX Designer, I designed the monibag app along side a
                  Junior Designer from conception to delivery.
                </Text>
              </Box>

              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={role} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  Resposibilities
                </Text>
                <UnorderedList spacing={3}>
                  <ListItem>
                    Conducting user research to understand the needs and pain
                    points of Nigerian expats.
                  </ListItem>
                  <ListItem>
                    Designing wireframes and interactive prototypes.
                  </ListItem>
                  <ListItem>
                    Creating the visual UI for a clean, trustworthy, and
                    intuitive interface.
                  </ListItem>
                  <ListItem>
                    Collaborating with developers to ensure the design was
                    implemented seamlessly.
                  </ListItem>
                </UnorderedList>
              </Box>
            </Flex>
          </RevealOnScrollFadeDown>

          <RevealOnScrollFadeDown>
            <Flex>
              <Box w={["100%", "100%", "50%"]}>
                <Text
                  fontSize={["16px", "18px", "24px"]}
                  fontWeight={[400, 400, 500]}
                >
                  <span>
                    <img src={Disclaimer} alt="producticon" width={["32px"]} />
                  </span>{" "}
                  Disclaimer
                </Text>
                <Text
                  // fontSize={["14px", "14px", "16px"]}
                  fontWeight="sm"
                  fontSize={["sm", "md", "md"]}
                  pt={["14px"]}
                  pb={["60px"]}
                  // color={["gray.500"]}
                >
                  The design work presented here has been modified to protect
                  the Non-Disclosure Agreement. Any data displayed here is not
                  real. This presentation doesn’t fully represent the products
                  from my employer in their entirety.
                </Text>
              </Box>
            </Flex>
          </RevealOnScrollFadeDown>
        </Box>
        {/* <Box rounded={"30px"} width={["100%", "100%", "1140px"]}>
            <img src={monibagproduct} alt="monibagtheproduct" />
          </Box> */}
        {/* <LoadingImage /> */}
        {/* </Box> */}
        <WalkThrough />
      </Box>
    </Container>
  );
}

const LoadingImage = ({ src, alt }) => {
  // Keyframe animation for continuous blur pulse
  const blurAnimation = keyframes`
    0%, 100% {
      filter: blur(5px);
    }
    50% {
      filter: blur(1px);
    }
  `;

  // Define the animation properties
  const animation = `${blurAnimation} 4s infinite`;

  return (
    <Box
      // width="300px"
      // height="300px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={monibagproduct}
        alt="monibagtheproduct"
        // rounded={"30px"}
        width={["100%", "100%", "1140px"]}
        height="100%"
        objectFit="contain"
        animation={animation}
      />
    </Box>
  );
};

export default Project1;

function WalkThrough() {
  return (
    <Box>
      <Container maxWidth={["container.sm", "container.lg"]}>
        <RevealOnScrollFadeDown>
          <Heading
            pt={["24px", "32px", "48px"]}
            fontSize={["2xl", "3xl", "5xl"]}
            // fontWeight={[500]}
            fontWeight={["medium", "medium", "medium"]}
            pb="4px"
          >
            I know you are Curious
          </Heading>

          <Text fontSize={["24px"]} color={["gray.500"]}>
            Come with me
          </Text>
        </RevealOnScrollFadeDown>
        <RevealOnScrollFadeRight>
          <Box className="direction-arrow">
            <img src={arrow} alt="arrow" w={["50px"]} />
          </Box>
        </RevealOnScrollFadeRight>

        <Box mt={["64px"]}>
          <Box>
            <RevealOnScrollFadeDown>
              <Box>
                <Heading
                  fontSize={["3xl", "4xl", "3xl"]}
                  pb="18px"
                  color="gray.600"
                  fontWeight={["medium", "medium", "medium"]}
                >
                  The Problem
                </Heading>
              </Box>
              <Box>
                <Text>
                  Nigerians in the UK often need to send money to friends and
                  family in Nigeria. Traditional remittance options can be
                  costly, slow, and complicated. There is a need for a
                  streamlined, reliable, and secure solution that addresses
                  these challenges.
                </Text>
              </Box>
            </RevealOnScrollFadeDown>
          </Box>
          <Box>
            <img src={lady} alt="problem" width={["50%"]} />
          </Box>
        </Box>
        <Box mt={["64px"]}>
          <Box // h={[800, 500, 600]}
            py={["32px", "32px", "54px"]}
            // px={["16px", "16px", "40px"]}
            // w={["100%", "100%", "100%"]}
            bg="gray.100"
            borderRadius={20}
            // backgroundImage={`url(${myImage})`}
            backgroundColor="primaryColor.100"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            // marginRight="20px"
          >
            <RevealOnScrollFadeDown>
              <Container>
                <Box>
                  <Heading
                    fontSize={["2xl", "3xl", "3xl"]}
                    pb="18px"
                    color="gray.600"
                    fontWeight={["medium", "medium", "medium"]}
                    textAlign="center"
                  >
                    <span>
                      <img src={role} alt="producticon" width={["32px"]} />
                    </span>{" "}
                    The Goal
                  </Heading>
                </Box>
                <Box>
                  <Text>
                    To design an efficient and user-friendly remittance
                    application that enables users in the UK to send money to
                    Nigeria quickly and securely.
                  </Text>
                </Box>
              </Container>
            </RevealOnScrollFadeDown>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
