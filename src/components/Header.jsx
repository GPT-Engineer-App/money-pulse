import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="brand.700" color="white" px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link href="#" mx={2}>
            Home
          </Link>
          <Link href="#" mx={2}>
            World
          </Link>
          <Link href="#" mx={2}>
            Business
          </Link>
          <Link href="#" mx={2}>
            Tech
          </Link>
          <Link href="#" mx={2}>
            Science
          </Link>
          <Link href="#" mx={2}>
            Health
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;