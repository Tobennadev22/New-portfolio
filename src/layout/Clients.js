import { Container, Text, Heading } from "@chakra-ui/react";

function Clients() {
  return (
    <Container>
      <Heading
        fontWeight={["medium", "medium", "medium"]}
        fontSize={["2xl", "3xl", "3xl"]}
        lineHeight={["16px", "16px", "40px"]}
        pb={10}
        mt={10}
        color="gray.600"
        textAlign={["center"]}
      >
        Some Amazing Companies I've worked with
      </Heading>
      <Text></Text>
      <img src="" alt="" />
    </Container>
  );
}

export default Clients;
