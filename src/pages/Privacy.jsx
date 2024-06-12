import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Privacy = () => {
  return (
    <Container maxW="container.md" mt={10}>
      <Box>
        <Heading as="h1" mb={4}>
          Privacy Policy
        </Heading>
        <Text fontSize="lg">
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
        </Text>
      </Box>
    </Container>
  );
};

export default Privacy;