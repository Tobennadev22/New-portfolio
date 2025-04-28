import React from "react";
import { Container, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bgColor="gray.700" py="20px">
      <Container maxWidth="conatainer.lg" textAlign="center">
        <Box color="#fff">
          <p>With ❤️ from my frontend skills</p>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
