import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
// import myImage from "../assets/bg-toby.png";
// import { Wave } from "../icons/hands.png";
import myImage from "../assets/thought.png";
import { Link } from "react-router-dom";

// Main Header component
function Header() {
  return (
    <Box mb={["16px", "16px", "28px"]} as="section" px={10} pt="48px">
      <Flex direction={["column", "column", "row"]} spacing="20px">
        {/* Main content box with background image */}
        <Box
          h={[800, 500, 600]}
          pt={["32px", "32px", "54px"]}
          px={["16px", "16px", "40px"]}
          w={["100%", "100%", 1140]}
          bg="#fbfbfa"
          borderRadius={20}
          // backgroundImage={`url(${myImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          mx="auto"
          marginRight="20px"
        >
          <Box textAlign={["center", "center", "left"]} px="24px">
            <Heading
              fontWeight={["medium", "medium", "semibold"]}
              fontSize={["3xl", "3xl", "5xl"]}
              pb={10}
              color="gray.600"
            >
              Hey! I'm Tobe, a product designer with 3+ years of professional
              experience.
            </Heading>
            <Text
              fontWeight="medium"
              fontSize={["sm", "md", "md"]}
              w={["100%", "100%", 600]}
              pt="2"
              color={["gray.500"]}
              textAlign={["center", "center", "left"]}
            >
              A user experience designer with over 3+ years of experience. I
              create and design minimalistic, user-centered solutions that are
              usable, equitable, useful, and enjoyable, leveraging intuitive
              solutions that help businesses achieve good ROI.
            </Text>
            <Box mt="48px">
              <Link>
                <Button
                  href={
                    "https://www.linkedin.com/in/ekwealor-tobechukwu-100113114/"
                  }
                  _hover={{
                    bg: useColorModeValue("gray.800", "gray.700"),
                    color: "gray.50",
                  }}
                  bgColor="gray.700"
                  color="gray.200"
                >
                  Let's have a chat
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* Placeholder for additional content */}
        <ImageSection />
      </Flex>
    </Box>
  );
}

// ImageSection component
function ImageSection() {
  return (
    <Box
      h={[300, 400, 600]}
      pt={["32px", "32px", "54px"]}
      px={["16px", "16px"]}
      w={["100%", "100%", 800]}
      display={["none", "none", "block"]}
      // bg="brandblue.200"
      bg="#fbfbfa"
      borderRadius={20}
      backgroundImage={`url(${myImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // className="ekit-fancy-text-animated"
    >
      {/* Additional content can be added here */}
    </Box>
  );
}

export default Header;
