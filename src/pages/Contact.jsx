import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" mt={10}>
      <Box>
        <Heading as="h1" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg">
          If you have any questions or feedback, please feel free to reach out to us at contact@financialtimes.com.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact;