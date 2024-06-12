import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" mt={10}>
      <Box>
        <Heading as="h1" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg">
          Welcome to the Financial Times. We provide the latest news and analysis on business, finance, and world events.
        </Text>
      </Box>
    </Container>
  );
};

export default About;