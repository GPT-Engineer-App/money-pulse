import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Box mb={10}>
        <Heading as="h1" mb={4}>
          Top Stories
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              Story 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              Story 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              Story 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mb={10}>
        <Heading as="h1" mb={4}>
          Latest News
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              News 1
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              News 2
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              News 3
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;