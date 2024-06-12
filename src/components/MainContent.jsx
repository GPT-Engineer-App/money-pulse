import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Top Stories
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            Story 1
          </Heading>
          <Text mt={2}>Summary of the story...</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            Story 2
          </Heading>
          <Text mt={2}>Summary of the story...</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            Story 3
          </Heading>
          <Text mt={2}>Summary of the story...</Text>
        </Box>
      </SimpleGrid>

      <Heading as="h2" size="xl" mt={8} mb={4}>
        Latest News
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            News 1
          </Heading>
          <Text mt={2}>Summary of the news...</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            News 2
          </Heading>
          <Text mt={2}>Summary of the news...</Text>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="md">
            News 3
          </Heading>
          <Text mt={2}>Summary of the news...</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default MainContent;