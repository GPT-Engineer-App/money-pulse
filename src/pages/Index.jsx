import { Box, Container, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Box mb={10}>
        <Heading as="h1" mb={4} fontSize="2xl" fontWeight="bold" color="gray.700">
          Top Stories
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/story1.jpg" alt="Story 1" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Story 1
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/story2.jpg" alt="Story 2" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Story 2
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/story3.jpg" alt="Story 3" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Story 3
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mb={10}>
        <Heading as="h1" mb={4} fontSize="2xl" fontWeight="bold" color="gray.700">
          Latest News
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/news1.jpg" alt="News 1" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              News 1
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/news2.jpg" alt="News 2" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              News 2
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/news3.jpg" alt="News 3" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              News 3
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box mb={10}>
        <Heading as="h1" mb={4} fontSize="2xl" fontWeight="bold" color="gray.700">
          Editor's Picks
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/pick1.jpg" alt="Pick 1" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Pick 1
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/pick2.jpg" alt="Pick 2" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Pick 2
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="white" p={5} borderRadius="md" boxShadow="md">
            <Image src="/images/pick3.jpg" alt="Pick 3" mb={4} borderRadius="md" />
            <Heading as="h2" size="md" mb={2} color="gray.800">
              Pick 3
            </Heading>
            <Text color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;