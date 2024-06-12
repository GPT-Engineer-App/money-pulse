import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.900" color="white" px={4} py={2} mt={10}>
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <Flex>
          <Link href="#" mx={2}>
            About
          </Link>
          <Link href="#" mx={2}>
            Contact
          </Link>
          <Link href="#" mx={2}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;