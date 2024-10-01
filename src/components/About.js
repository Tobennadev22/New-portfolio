import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import myImage from "../assets/bg-toby.png";

// Main Header component
function About() {
  return (
    <Box mb={["16px", "16px", "28px"]} as="section" px={10} pt="48px">
      <Flex direction={["column", "column", "row"]} spacing="20px" mx={"auto"}>
        {/* Main content box with background image */}
        <Box
          h={[800, 500, 600]}
          pt={["32px", "32px", "54px"]}
          px={["16px", "16px", "40px"]}
          w={["100%", "100%", "100%"]}
          bg="gray.100"
          borderRadius={20}
          backgroundImage={`url(${myImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          marginRight="20px"
        >
          <Box textAlign={["center", "center", "left"]} px="24px">
            <Heading
              fontWeight={["medium", "medium", "semibold"]}
              fontSize={["3xl", "3xl", "5xl"]}
              pb={10}
              color="brandBlue.900"
            >
              Get to know me <span>emoji</span>
            </Heading>
            <Box fontSize={["md", "md", "lg"]}>
              <Text
                fontWeight="medium"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                My name is Tobechukwu, and I am a user experience designer. I
                have always been fascinated by the impact design has on human
                and day to day lives.
              </Text>
              <Text
                fontWeight="medium"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                After a couple of years working on various engineering teams as
                a UI Designer/Front End Developer, I decided to focus more on
                design because I believe I can help reduce development time for
                engineering teams by producing high-fidelity prototypes that can
                easily translate to code with my frontend experience. I have
                been lucky to have worked with talented individuals across
                different cross-functional teams on exciting projects where I
                have made valuable contributions. I have designed complex
                interfaces that have increased efficiencies and improved
                companies' revenue. I am constantly improving my skill because I
                believe in the say "Learning never stops".
              </Text>
              <Text
                fontWeight="medium"
                // fontSize={["sm", "md", "md"]}
                w={["100%", "100%", "100%"]}
                pt="2"
                color={["gray.500"]}
                textAlign={["center", "center", "left"]}
              >
                When I’m not designing, you can find me watching a football
                game, mentoring young designers, or streaming useful videos on
                youtube. I am based in the industrious city of Lagos, Nigeria.
              </Text>
            </Box>
            <Box mt="48px">
              <Button
                _hover={{
                  bg: useColorModeValue("gray.800", "gray.700"),
                  color: "gray.50",
                }}
                bgColor="gray.700"
                color="gray.200"
              >
                Let's Talk
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Placeholder for additional content */}
        {/* <ImageSection /> */}
      </Flex>
    </Box>
  );
}

export default About;
