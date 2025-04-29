import React from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bgColor="gray.700" py="20px">
      <Container maxWidth="conatainer.lg">
        <Flex gap="100px">
          <Box color="#fff">
            <Text>With ❤️ from my frontend skills</Text>
          </Box>
          <Box color="#fff">
            <Text>LinkedIn</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
